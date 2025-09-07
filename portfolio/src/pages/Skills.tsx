import{ useState } from 'react';
import { Code, Database, Globe, Cpu } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const tabData = {
    frontend: {
      title: 'Frontend',
      icon: <Globe className="w-5 h-5" />,
      skills: [
        { name: 'React',  color: 'bg-blue-500' },
        { name: 'JavaScript', color: 'bg-yellow-500' },
        { name: 'TypeScript', color: 'bg-blue-600' },
        { name: 'HTML5', color: 'bg-orange-500' },
        { name: 'CSS3', color: 'bg-blue-400' },
        { name: 'Tailwind CSS', color: 'bg-teal-500' },

      ]
    },
    backend: {
      title: 'Backend',
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: 'ASP.net', color: 'bg-green-600' },
       
      ]
    },
    database: {
      title: 'Database',
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: 'MySQL', color: 'bg-blue-600' },
        { name: 'MongoDB', color: 'bg-green-600' },
        { name: 'MSSQL', color: 'bg-blue-700' },
        
      ]
    },
    languages: {
      title: 'Languages & Tools',
      icon: <Cpu className="w-5 h-5" />,
      skills: [
        { name: 'Java',  color: 'bg-red-600' },
        { name: 'C', color: 'bg-blue-800' },
    
        { name: 'Git',  color: 'bg-orange-600' },
      
        { name: 'Linux',  color: 'bg-gray-800' },
        { name: 'Figma',  color: 'bg-purple-500' }
      ]
    }
  };

  const tabs = ['frontend', 'backend', 'database', 'languages'];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-200 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12 bg-gray-800 rounded-full p-2 max-w-2xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              {tabData[tab].icon}
              <span className="hidden sm:inline">{tabData[tab].title}</span>
            </button>
          ))}
        </div>

        {/* Skills Content */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            {tabData[activeTab].title} Skills
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tabData[activeTab].skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="bg-gray-700 rounded-lg p-4 text-center border border-gray-600 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <span className="text-gray-200 font-medium text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

       
       
      </div>
    </section>
  );
};

export default Skills;