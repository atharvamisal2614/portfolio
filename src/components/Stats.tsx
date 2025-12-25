// "use client";

// const stats = [
//     { label: "Years Professional Experience", value: "2+", icon: "🚀" },
//     { label: "Projects Completed", value: "15+", icon: "💼" },
//     { label: "Happy Clients", value: "10+", icon: "😊" },
//     { label: "Modern Technologies", value: "16+", icon: "⚡" },
// ];

// export default function Stats() {
//     return (
//         <section className="py-16 px-6 md:px-20 relative bg-black/30">
//             <div className="max-w-6xl mx-auto">
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//                     {stats.map((stat, index) => (
//                         <div
//                             key={index}
//                             className="relative p-6 bg-glass-bg border-2 border-neon-blue/50 rounded-xl text-center group hover:shadow-[0_0_30px_rgba(0,243,255,0.3)] hover:scale-105 transition-all duration-300"
//                         >
//                             <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

//                             <div className="relative z-10">
//                                 <div className="text-4xl mb-2">{stat.icon}</div>
//                                 <div className="text-3xl md:text-4xl font-bold text-neon-blue mb-2">
//                                     {stat.value}
//                                 </div>
//                                 <div className="text-sm text-gray-400">
//                                     {stat.label}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }







"use client";

import SlotCounter from "react-slot-counter";

const stats = [
    { label: "Years Professional Experience", value: "2+", icon: "🚀" },
    { label: "Projects Completed", value: "15+", icon: "💼" },
    { label: "Happy Clients", value: "10+", icon: "😊" },
    { label: "Modern Technologies", value: "16+", icon: "⚡" },
];

export default function Stats() {
    return (
        <section className="py-16 px-6 md:px-20 relative bg-black/30">

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="relative p-6 bg-glass-bg border-2 border-neon-blue/50 rounded-xl text-center group hover:shadow-[0_0_30px_rgba(0,243,255,0.3)] hover:scale-105 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className="text-4xl mb-2">{stat.icon}</div>

                                {/* Incremental counter */}
                                <div className="text-3xl md:text-4xl font-bold text-neon-blue mb-2">
                                    <SlotCounter
                                        value={stat.value.replace("+", "")}
                                        startValue={0}
                                        duration={1.5}
                                        animateOnVisible
                                    />
                                    +
                                </div>

                                <div className="text-sm text-gray-400">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
