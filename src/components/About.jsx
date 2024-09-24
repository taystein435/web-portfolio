
const About = () => {
  return (
    <>
      <div className="lg:mx-40 bg-white  py-20" id="about">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
          <h3 className="text-2xl font-bold text-center mt-12 mb-8">
            Education
          </h3>
          <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-12 ">
            <div className="flex-1">
              <h4 className="text-2xl font-bold mb-2">
                University of Roehampton, London, UK.
              </h4>
              <p className=" font-sans mb-8">
                M.Sc. Web Development, September 2024
              </p>
            </div>

            <div className="flex-1">
              <h4 className="text-2xl font-bold  mb-2">
                Obafemi Awolowo University, Osun, Nigeria.
              </h4>
              <p className=" font-sans">
                B.Sc. Electronic and Electrical Engineering, September 2019
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
