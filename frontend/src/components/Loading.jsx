import { useState, useEffect } from 'react';
import { ProgressBar } from 'react-loader-spinner';

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Clean up on component unmount
  }, []);

  if (!loading) {
    return null; // Or return your error component
  }

  return (
    <ProgressBar
      height="15rem"
      width="100%"
      ariaLabel="progress-bar-loading"
      barColor='#212529'
      borderColor='#212529'
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
};

export default Loading;