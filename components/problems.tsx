"use client";

import { useState } from "react";

export default function Problems() {
  const [selectedProblem, setSelectedProblem] = useState<number>(0);

  const problems = [
    {
      title: "Building Internal Platforms is a Heavy Lift",
      description:
        "A huge amount of human and technical cost is poured into building internal platforms, often based on cloud providers' 'managed' Kubernetes services. It takes a village to build a platform.",
    },
    {
      title: "The 'Namespaces Vending Machine'",
      description:
        "The result of such efforts looks often like a 'namespaces vending machine', or a platform that automates the provisioning of developer environments (which in Kubernetes are often identified as namespaces), following security standards.",
    },
    {
      title: "Multi-tenancy is Hard and Misunderstood",
      description:
        "Multi-tenancy (sharing of resources/clusters among multiple developers' teams) is hard and misunderstood.",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            The Problems Kubespaces Solves
          </h2>
        </div>
        <div className="mt-8">
          <div className="flex justify-center">
            <div className="flex flex-col space-y-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className={`cursor-pointer rounded-lg p-4 ${
                    selectedProblem === index
                      ? "bg-gray-800 text-gray-200"
                      : "bg-white text-gray-700"
                  }`}
                  onClick={() => setSelectedProblem(index)}
                >
                  <h3 className="text-xl font-bold">{problem.title}</h3>
                  <p className="mt-2">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
