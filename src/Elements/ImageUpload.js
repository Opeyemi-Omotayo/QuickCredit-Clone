import React, { useRef, useState, useEffect } from 'react';

const ImageUpload = props => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = event => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(props.id, pickedFile, fileIsValid);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <>
    <div className="bg-gray-100 border border-gray-800 border-dotted">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: 'none' }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={` ${props.center && 'flex items-center justify-center flex-col'}`}>
        <div className="h-[120px] w-full">
          {previewUrl && <img src={previewUrl} className='h-[120px] w-full' alt="Preview" />}
          {!previewUrl &&<p className='text-sm' onClick={pickImageHandler}>click to upload</p>}
        </div>
       
      </div>
    </div>
     {!isValid && <p className='text-sm text-red-500'>{props.errorText}</p>}
    </>
  );
};

export default ImageUpload;
