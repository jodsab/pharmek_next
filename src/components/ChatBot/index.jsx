import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMdClose, IoMdSend } from "react-icons/io";
import { BsChatDotsFill } from "react-icons/bs";
import gatito from "./gatito.png";
import perfil from "./perfil.png";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "¡Hola! Soy Pharmek Michibot. ¿En qué puedo ayudarte? 🐱💊",
    },
  ]);
  const [input, setInput] = useState("");

  const fetchMistralResponse = async (query) => {
    try {
      const response = await fetch("http://localhost:3000/api/mistral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const text = await response.text();
      if (!text) throw new Error("Respuesta vacía de la API.");
      const result = JSON.parse(text);
      return result?.text || "No encontré información. 🐱💭🍣";
    } catch (error) {
      console.error("Error al conectar con Mistral:", error);
      return "Error al obtener la respuesta. 😿";
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const responseText = await fetchMistralResponse(input);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: responseText }]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-4 rounded-lg shadow-lg w-96 h-[70vh] relative mb-4"
        >
          {/* Botón de cierre con ícono */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
          >
            <IoMdClose size={20} />
          </button>

          <div className="text-center font-bold text-lg mb-2">
            Pharmek Michibot 🐱
          </div>
          <div className="h-[55vh] overflow-y-auto border-b pb-2 mb-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-end mb-2 ${
                  msg.sender === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                {msg.sender === "bot" && (
                  <Image
                    src={gatito}
                    alt="Bot"
                    width={32}
                    height={32}
                    className="rounded-full mr-2"
                  />
                )}
                <div
                  className={`p-2 rounded-lg text-white ${
                    msg.sender === "bot" ? "bg-blue-600" : "bg-green-600"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && (
                  <Image
                    src={perfil}
                    alt="User"
                    width={32}
                    height={32}
                    className="rounded-full ml-2"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Input con tecla "Enter" */}
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1 p-2 border rounded-l-lg"
              placeholder="Escribe un mensaje..."
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-blue-600 text-white rounded-r-lg"
            >
              <IoMdSend size={20} />
            </button>
          </div>
        </motion.div>
      )}

      {/* Botón flotante con ícono */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        {isOpen ? <IoMdClose size={24} /> : <BsChatDotsFill size={24} />}
      </button>
    </div>
  );
};

export default Chatbot;
