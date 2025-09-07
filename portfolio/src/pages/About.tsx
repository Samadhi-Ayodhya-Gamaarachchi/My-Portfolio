import AboutImage from "../assets/AboutImage.png"

const About = () => (
  <section id="about" className="min-h-screen flex items-center justify-center">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-200 mb-4">About Me</h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
      </div>
      <div className="grid grid-flow-col grid-rows-3 gap-5">
        <div className="row-span-3 mt-0">
          <img src={AboutImage} alt="Profile Image" className="w-full h-full object-cover rounded-lg"/>
        </div>
        <div className="col-span-2">
          <p className="text-gray-200 max-w-2xl mx-auto">
            I'm a BSc (Hons) IT undergraduate at the University of Moratuwa with a
            strong interest in Software Development and UI/UX Design. Passionate
            about creating intuitive, user-friendly solutions, I enjoy combining
            technical skills with creativity to solve real-world problems. I'm
            always eager to learn new technologies, collaborate on impactful
            projects, and grow as a developer and designer.
          </p>
        </div>
        <div className="col-span-2 row-span-2">
          <div className="h-full">
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">Education Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-600"></div>
              
              {/* Education items */}
              <div className="space-y-8">
                {/* University */}
                <div className="relative flex items-start">
                  <div className="absolute left-2 w-4 h-4 bg-indigo-600 rounded-full border-2 border-gray-900"></div>
                  <div className="ml-12">
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <h4 className="text-lg font-semibold text-white">BSc (Hons) Information Technology</h4>
                      <p className="text-indigo-400 font-medium">University of Moratuwa</p>
                      <p className="text-gray-400 text-sm mt-1">2022 - Present</p>
                      <p className="text-gray-300 text-sm mt-2">Specializing in Software Development and UI/UX Design</p>
                    </div>
                  </div>
                </div>

                {/* A/L */}
                <div className="relative flex items-start">
                  <div className="absolute left-2 w-4 h-4 bg-indigo-500 rounded-full border-2 border-gray-900"></div>
                  <div className="ml-12">
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <h4 className="text-lg font-semibold text-white">GCE Advanced Level</h4>
                      <p className="text-indigo-400 font-medium">Swarnapali Balika Maha Vidyalaya </p>
                      <p className="text-gray-400 text-sm mt-1">2019 - 2021</p>
                      <p className="text-gray-300 text-sm mt-2">Physical Science Stream</p>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;