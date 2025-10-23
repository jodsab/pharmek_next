export async function POST(req) {
  try {
    const { query } = await req.json()
    if (!query) {
      return new Response(JSON.stringify({ error: 'Falta el mensaje del usuario' }), {
        status: 400
      })
    }

    const mistralResponse = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`
      },
      body: JSON.stringify({
        model: 'mistral-tiny',
        messages: [
          {
            role: 'system',
            content:
              'Eres Pharmek Michibot 🐱 y solo respondes en español sobre temas de salud y cuidado animal, a cualquier otra consulta debes evadirla y solo responder siendo gracioso, por ejemplo: Miau?, Tengo hambre, Y si mejor hablamos de cuidado animal?, entre otras respuestas, jamás incluyas links, imagenes, solo contenido textual.'
          },
          { role: 'user', content: query }
        ],
        temperature: 0.7
      })
    })

    if (!mistralResponse.ok) {
      const errorText = await mistralResponse.text()
      console.error('Error de Mistral:', mistralResponse.status, errorText)
      return new Response(JSON.stringify({ error: `Error de Mistral: ${errorText}` }), {
        status: mistralResponse.status
      })
    }

    const data = await mistralResponse.json()
    const responseText = data.choices?.[0]?.message?.content || 'Respuesta no disponible 🐱💭'

    return new Response(JSON.stringify({ text: responseText }), {
      status: 200
    })
  } catch (error) {
    console.error('Error en la API de Mistral:', error)
    return new Response(JSON.stringify({ error: 'Error al obtener la respuesta. 😿' }), {
      status: 500
    })
  }
}
