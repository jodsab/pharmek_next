import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

import db from '@/libs/db'

export async function POST(request) {
  try {
    const data = await request.json()

    const userFound = await db.user.findUnique({
      where: {
        email: data.email
      }
    })

    if (userFound) {
      return NextResponse.json(
        {
          message: 'El correo ya ha sido registrado antes, intenta con otro correo.'
        },
        {
          status: 400
        }
      )
    }

    const usernameFound = await db.user.findUnique({
      where: {
        username: data.username
      }
    })

    if (usernameFound) {
      return NextResponse.json(
        {
          message: 'El nombre ya ha sido registrado antes, prueba recuperando tu cuenta.'
        },
        {
          status: 400
        }
      )
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)
    const newUser = await db.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword
      }
    })

    const { password: _, ...user } = newUser
    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message
      },
      {
        status: 500
      }
    )
  }
}
