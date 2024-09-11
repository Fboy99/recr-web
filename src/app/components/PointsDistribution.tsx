export function PointsDistribution() {
  const pointsData = [
    {
      points: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Very few applicants meet these criteria.",
    },
    {
      points: 3,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alternatively, you receive three points for good German language skills at level B2.",
    },
    {
      points: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. German language skills at level B1 are also awarded two points.",
    },
    {
      points: 1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Previous stays as a tourist do not count.",
    },
    {
      points: 1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. If you apply for the Opportunity Card together with your spouse.",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white max-w-[1040px] py-12 rounded-[20px] shadow-lg">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Points distribution for the Opportunity Card at a glance
          </h2>
          {/* Grid layout with responsive adjustments */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {pointsData.map((point, index) => (
              <div key={index} className="p-6 flex flex-col items-center sm:items-center md:items-start lg:items-start">
                <div className="bg-blue-100 text-black-600 rounded-full h-12 w-12 flex items-center justify-center mb-4 text-xl font-bold">
                  {point.points}
                </div>
                <p className="text-gray-600 text-left">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
