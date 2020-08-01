import React, { useState, useEffect } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
  const [device, setDevice] = useState(null);

  useEffect(() => {
    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|vodafone|o2|poc		ket|kindle|mobile|pda|psp|treo)/i)) ||
      (navigator.userAgent.match(/iPod/i)) ||
      (navigator.userAgent.match(/operamini/i)) ||
      (navigator.userAgent.match(/blackberry/i)) ||
      (navigator.userAgent.match(/(palmos|palm|hiptop|avantgo|plucker|xiino|blazer|elaine)/i))
      ||
      (navigator.userAgent.match(/(windowsce|ppc|windows ce|smartphone| windows ce iemobile)/i)) ||
      (navigator.userAgent.match(/android/i))) {
      setDevice('mobile');
    }
    else {
      setDevice('computer');
    }
  }, [])
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} device ={device} />
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  );
}

export default App;
