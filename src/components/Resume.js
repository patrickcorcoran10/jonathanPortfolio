export default function Resume() {
  return (
    <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="text-base max-w-prose lg:max-w-none">
            <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              Jonathan's
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              RESUME
            </p>
          </div>
        </div>
        <div className="relative">
          <svg
            className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
            />
          </svg>
          <svg
            className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
            />
          </svg>
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                <p>Front-End Proficiencies</p>
                <ol role="list">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>Responsive Design</li>
                  <li>React</li>
                  <li>Bootstrap</li>
                </ol>
              </div>
              <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                <p>Back-End Proficiencies</p>
                <ol role="list">
                  <li>APIs</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>MySQL, Sequelize</li>
                  <li>MongoDB, Mongoose</li>
                  <li>REST</li>
                  <li>GraphQL</li>
                </ol>
              </div>
            </div>
            <div className="mt-8 inline-flex rounded-md shadow">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1ph-RI_5cOrGGtXwUtIbB8BmENUyOwpLj/view?usp=sharing"
                className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                See Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
