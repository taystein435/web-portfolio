const projects = [
    { id: 1, name: "HTML & CSS", rating: 12 / 12 },
    { id: 2, name: "Tailwind CSS", rating: 12 / 12 },
    { id: 3, name: "React (JS and Native)", rating: 12 / 12 },
    { id: 4, name: "Javascript", rating: 10 / 12 },
    { id: 5, name: "Next JS", rating: 10 / 12 },
    { id: 6, name: "NodeJS (Express)", rating: 10 / 12 },
    { id: 7, name: "MongoDB", rating: 10 / 12 },
    { id: 8, name: "MySQL", rating: 10 / 12 },
    { id: 9, name: "PostgresSQL", rating: 10 / 12 },
    { id: 10, name: "Firebase", rating: 8 / 12 },
    { id: 10, name: "Docker", rating: 8/ 12 },
    { id: 10, name: "Kubernetes", rating: 8 / 12 },
    { id: 10, name: "Git & GitHub", rating: 12 / 12 },
    { id: 10, name: "TypeScript", rating: 10 / 12 },
    { id: 10, name: "TDD", rating: 12 / 12 },
    { id: 10, name: "Agile", rating: 10/ 12 },
    { id: 10, name: "Wordpress", rating: 12 / 12 },
    { id: 10, name: "Redis", rating: 6 / 12 },
    { id: 10, name: "Nginx", rating: 8 / 12 },
  ];
  
  const Skills = () => {
    return (
      <>
        <div className="mt-12 lg:mb-32 text-white" id="skills">
          <div className="container m-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Skills</h2>
            {projects.map((item) => (
              <div key={item.id} className="mt-6">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                </div>
                {/* Use inline style for dynamic width */}
                <div className="h-4 bg-slate-600 block rounded-md" style={{ width: `${(item.rating ) * 100}%` }}></div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  
  export default Skills;
  