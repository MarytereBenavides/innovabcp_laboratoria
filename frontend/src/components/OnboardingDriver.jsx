"use client";
import { useEffect, useRef } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const OnboardingDriver = () => {
  const driverRef = useRef(null);

  useEffect(() => {
    driverRef.current = driver({
      showProgress: true,
      showButtons: ['next', 'previous'],
      steps: [
        {
          element: '#tour-example',
          popover: {
            title: 'Animated Tour Example',
            description: "Here is the code example showing animated tour. Let's walk you through it.",
            side: 'left',
            align: 'start',
          },
        },
        {
          element: 'code .line:nth-child(1)',
          popover: {
            title: 'Import the Library',
            description: 'It works the same in vanilla JavaScript as well as frameworks.',
            side: 'bottom',
            align: 'start',
          },
        },
        {
          element: 'code .line:nth-child(2)',
          popover: {
            title: 'Importing CSS',
            description: 'Import the CSS which gives you the default styling for popover and overlay.',
            side: 'bottom',
            align: 'start',
          },
        },
        {
          element: 'code .line:nth-child(4) span:nth-child(7)',
          popover: {
            title: 'Create Driver',
            description: 'Simply call the driver function to create a driver.js instance.',
            side: 'left',
            align: 'start',
          },
        },
        {
          element: 'code .line:nth-child(16)',
          popover: {
            title: 'Start Tour',
            description: 'Call the drive method to start the tour and your tour will be started.',
            side: 'top',
            align: 'start',
          },
        },
      ],
    });
  }, []);

  const startTour = () => {
    if (driverRef.current) {
      driverRef.current.drive();
    }
  };

  return (
    <div className="p-4">
      <h2 id="tour-example" className="text-2xl font-semibold">Driver.js Tour Example</h2>
      <pre className="bg-gray-100 p-4 rounded-md mt-4">
        <code>
          <div className="line">import {'{ driver }'} from 'driver.js';</div>
          <div className="line">import 'driver.js/dist/driver.css';</div>
          <div className="line">// Your other code here</div>
          <div className="line">const driverObj = driver();</div>
          <div className="line">driverObj.drive();</div>
        </code>
      </pre>
      <button
        onClick={startTour}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Start Tour
      </button>
    </div>
  );
};

export default OnboardingDriver;
