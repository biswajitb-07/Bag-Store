import React from 'react'
import clients from "../../../api/clients.json"

export const Client = () => {

    return (
        <div className="max-w-[78rem] mx-auto px-6 pt-20 pb-10 text-center">

            <h2 className="text-2xl md:text-4xl font-black mb-2">Our Happy Clients!</h2>
            <p className="text-gray-500 mb-8">Malesuada bibendum arcu vitae elementum.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clients.map((client, index) => (
                    <div key={index} className="bg-white shadow-2xl rounded-lg p-6 text-left">
                        <p className="text-gray-700 mb-4">{client.text}</p>
                        <div className="flex items-center gap-4">
                            <img
                                src={client.image}
                                alt="Client"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-bold text-gray-900">{client.name}</h3>
                                <p className="text-sm text-gray-500">{client.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
