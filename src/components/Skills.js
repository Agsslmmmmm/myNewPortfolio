import React from 'react';

const skillsList = [
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'Python'
];

const Skills = () => {
  return (
    <div className="bg-transparent mt-16 w-full h-full">
      <div className="container mx-auto w-full h-full" id='skills'>
        <h2 className="text-xl font-semibold mb-8 text-gray-600">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className="bg-transparent p-6 rounded-lg shadow-md transform hover:scale-110 transition-all duration-500"
            >
              <p className="text-xl font-semibold text-gray-600">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
