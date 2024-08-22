import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out'
};

const activeStyle: React.CSSProperties = {
  borderColor: '#2196f3'
};

const acceptStyle: React.CSSProperties = {
  borderColor: '#00e676'
};

const rejectStyle: React.CSSProperties = {
  borderColor: '#ff1744'
};

interface DropZoneProps {
  // Define any props if needed
}

interface FileWithPreview extends File {
  preview: string;
}

function DropZone(props: DropZoneProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    ));
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': []
    }
  });

  const style: React.CSSProperties = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  const thumbs = files.map(file => (
    <div key={file.name}>
      <img
        src={file.preview}
        alt={file.name}
      />
    </div>
  ));

  // Clean up file previews when component unmounts
  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <section>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div>Drag and drop your images here.</div>
      </div>
      <aside>
        {thumbs}
      </aside>
    </section>
  );
}

export default DropZone;