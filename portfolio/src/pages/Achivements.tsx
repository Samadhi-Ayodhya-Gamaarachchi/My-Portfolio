import {  Award,  Target} from "lucide-react";
import Hackelite from "../assets/hackElite.jpg";
import algo from "../assets/algoXplore.jpg";
import coderush from "../assets/codeRush.jpg";
import volunteer from "../assets/volunteer.jpeg"

const Achievements = () => (
  <section id="achievements" className="min-h-screen flex items-center justify-center">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-200 mb-4">Achievements</h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
      </div>
      
      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Achievement 1 */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 group">
          <div className="flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4 group-hover:bg-indigo-500 transition-colors">
            <Award className="w-8 h-8 text-white" />
          </div>
          <img src={Hackelite} alt="HackElite Achievement" className="w-full h-48 object-cover rounded-lg mb-3" />
          <h3 className="text-xl font-semibold text-white mb-2">HackElite Finalist</h3>
          <p className="text-gray-300 text-sm mb-3">Ideathon</p>
          <p className="text-gray-400">Finalist at HackElite, a competitive hackathon that challenged us to develop innovative solutions under time constraints, showcasing problem-solving, teamwork, and technical skills.</p>
        </div>

        {/* Achievement 2 */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 group">
          <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4 group-hover:bg-purple-500 transition-colors">
            <Award className="w-8 h-8 text-white" />
          </div>
          <img src={algo} alt="AlgoXplore Achievement" className="w-full h-48 object-cover rounded-lg mb-3" />
          <h3 className="text-xl font-semibold text-white mb-2">AlgoXplore Finalist</h3>
          <p className="text-gray-300 text-sm mb-3">CTF Competition</p>
          <p className="text-gray-400">Achieved recognition as a finalist in the AlgoXplore CTF competition.</p>
        </div>

        {/* Achievement 3 */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 group">
          <div className="flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4 group-hover:bg-green-500 transition-colors">
            <Award className="w-8 h-8 text-white" />
          </div>
          <img src={coderush} alt="codeRush Achievement" className="w-full h-48 object-cover rounded-lg mb-3" />
          <h3 className="text-xl font-semibold text-white mb-2">CodeRush 2024 7th place</h3>
          <p className="text-gray-300 text-sm mb-3">hackathon</p>
          <p className="text-gray-400">As part of Team CelestialHeroines, I won a Merit Award at CodeRush 2024, a hackathon organized by INTECS, Faculty of Information Technology, University of Moratuwa.</p>
        </div>

       

        {/* Achievement 4 */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 group">
          <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4 group-hover:bg-red-500 transition-colors">
            <Target className="w-8 h-8 text-white" />
          </div>
           <img src={volunteer} alt="volunteering" className="w-full h-48 object-cover rounded-lg mb-3" />
          <h3 className="text-xl font-semibold text-white mb-2">Outstanding Volunteers of the IEEE WIE Student Branch Affinity Group of University of Moratuwa, for the month of May </h3>
          
        </div>


      </div>

     
    </div>
  </section>
);

export default Achievements;