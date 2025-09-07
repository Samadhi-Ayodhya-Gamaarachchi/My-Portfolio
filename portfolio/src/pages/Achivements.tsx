import {  Award, Medal, Target, Zap } from "lucide-react";
import Hackelite from "../assets/hackElite.jpg";
import algo from "../assets/algoXplore.jpg";
import coderush from "../assets/codeRush.jpg";

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
          <p className="text-gray-400">Achieved outstanding academic performance with GPA above 3.7 for consecutive semesters.</p>
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
          <p className="text-gray-400">Led team to victory in 48-hour hackathon developing innovative web application.</p>
        </div>

        {/* Achievement 4 */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 group">
          <div className="flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-4 group-hover:bg-orange-500 transition-colors">
            <Medal className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">GitHub Contributions</h3>
          <p className="text-gray-300 text-sm mb-3">Open Source Projects</p>
          <p className="text-gray-400">500+ contributions to open source projects with multiple merged pull requests.</p>
        </div>

        {/* Achievement 5 */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 group">
          <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4 group-hover:bg-red-500 transition-colors">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Project Excellence</h3>
          <p className="text-gray-300 text-sm mb-3">Final Year Project</p>
          <p className="text-gray-400">Received highest grade for innovative full-stack application with modern tech stack.</p>
        </div>

        {/* Achievement 6 */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 group">
          <div className="relative mb-4">
            <img 
              src="/path/to/aws-certification-photo.jpg" 
              alt="AWS Certification Achievement" 
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <div className="absolute top-3 right-3 flex items-center justify-center w-12 h-12 bg-pink-600 rounded-full group-hover:bg-pink-500 transition-colors">
              <Zap className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Certification</h3>
          <p className="text-gray-300 text-sm mb-3">AWS Cloud Practitioner</p>
          <p className="text-gray-400">Successfully obtained AWS certification demonstrating cloud computing expertise.</p>
        </div>

      </div>

      {/* Statistics Row */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <h4 className="text-3xl font-bold text-indigo-400 mb-2">15+</h4>
          <p className="text-gray-300">Projects Completed</p>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <h4 className="text-3xl font-bold text-purple-400 mb-2">3.8</h4>
          <p className="text-gray-300">Current GPA</p>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <h4 className="text-3xl font-bold text-green-400 mb-2">500+</h4>
          <p className="text-gray-300">GitHub Commits</p>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <h4 className="text-3xl font-bold text-orange-400 mb-2">5</h4>
          <p className="text-gray-300">Awards Won</p>
        </div>
      </div>
    </div>
  </section>
);

export default Achievements;