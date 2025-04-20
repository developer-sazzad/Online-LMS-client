import React, { useState } from 'react';

const course = [
  {
    id: 1,
    module: 'HTML Basics',
    videos: [
      {
        title: 'Intro to HTML',
        url: 'https://pub-5bdf3a92246647f5a46d2c198add2636.r2.dev/Edit%20_Programs_%20with%20Elementor%20-%2023%20April%202024%20(1).mp4',
        duration: '5:32'
      },
      {
        title: 'HTML Tags',
        url: 'https://pub-5bdf3a92246647f5a46d2c198add2636.r2.dev/O%20Sathi%20Itna%20Toh%20Bas%20kar%20De%20--%20WhatsApp%20status%20%23Arjitsingh.mp4',
        duration: '7:15'
      }
    ]
  },
  {
    id: 2,
    module: 'Basics CSS',
    videos: [
      {
        title: 'Intro to CSS',
        url: 'https://pub-5bdf3a92246647f5a46d2c198add2636.r2.dev/Edit%20_Programs_%20with%20Elementor%20-%2023%20April%202024%20(1).mp4',
        duration: '5:32'
      },
      {
        title: 'CSS Selectors',
        url: 'https://pub-5bdf3a92246647f5a46d2c198add2636.r2.dev/O%20Sathi%20Itna%20Toh%20Bas%20kar%20De%20--%20WhatsApp%20status%20%23Arjitsingh.mp4',
        duration: '7:15'
      }
    ]
  }
];

function flattenVideos(course) {
  let flat = [];
  course.forEach((mod, modIndex) => {
    mod.videos.forEach((video, videoIndex) => {
      flat.push({ ...video, modIndex, videoIndex });
    });
  });
  return flat;
}

function VideoList() {
  const allVideos = flattenVideos(course);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openModuleIndex, setOpenModuleIndex] = useState(null);

  const selectedVideo = allVideos[selectedIndex];

  const handlePrevious = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex < allVideos.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white font-sans">
      {/* Video Player */}
      <div className="flex flex-col flex-1 p-6">
        {selectedVideo && (
          <div className="w-full h-full">
            <h3 className="text-2xl font-semibold mb-4">{selectedVideo.title}</h3>
            <div className="aspect-video bg-black">
              <video controls src={selectedVideo.url} className="w-full h-full object-contain" />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        {/* <div className="flex justify-between w-full max-w-3xl">
          <button
            onClick={handlePrevious}
            disabled={selectedIndex === 0}
            className={`px-4 py-2 rounded ${
              selectedIndex === 0
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={selectedIndex === allVideos.length - 1}
            className={`px-4 py-2 rounded ${
              selectedIndex === allVideos.length - 1
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-500'
            }`}
          >
            Next
          </button>
        </div> */}
      </div>
      {/* Sidebar */}
      <div className="w-1/3 bg-gray-800 p-4 overflow-y-auto border-r border-gray-700">
        <h2 className="text-xl font-bold mb-4">Course Modules</h2>

        {course.map((mod, modIndex) => (
          <div key={mod.id} className="mb-4">
            <button
              onClick={() => setOpenModuleIndex(openModuleIndex === modIndex ? null : modIndex)}
              className="w-full text-left text-lg font-semibold px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
            >
              {mod.module}
            </button>

            {openModuleIndex === modIndex && (
              <ul className="mt-2 space-y-2 pl-4">
                {mod.videos.map((video, videoIndex) => {
                  const absoluteIndex = flattenVideos(course).findIndex(
                    (v) => v.modIndex === modIndex && v.videoIndex === videoIndex
                  );
                  return (
                    <li key={videoIndex}>
                      <button
                        onClick={() => setSelectedIndex(absoluteIndex)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition ${selectedIndex === absoluteIndex
                          ? 'bg-purple-600'
                          : 'hover:bg-gray-700'
                          }`}
                      >
                        {video.title}{' '}
                        <span className="text-sm text-gray-400">({video.duration})</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>


    </div>
  );
}

export default VideoList;
