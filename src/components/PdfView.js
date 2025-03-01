import { Document, pdfjs, Page } from "react-pdf";
import resume from "../Assets/resume2025.pdf";
import { Button } from "react-bootstrap";
import { CgSoftwareDownload } from "react-icons/cg";
import { useState } from "react";
import Loader from "./LoadingScreen";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

function PdfView() {
  const [load, updateLoad] = useState(true);

  return (
    <div className="resume-container">
      <Loader load={load} />

      <Document className="pdfdoc"
                file={resume}
                onLoadSuccess={() => updateLoad(false)}
                onLoadError={(error) => { console.error("PDF Load Error:", error); updateLoad(false);}}>
        <Page pageNumber={1} />
        <Page pageNumber={2} />
      </Document>

      <Button variant="primary flex"
              download
              href={resume}
              style={{ display: "flex", alignItems: "center", borderRadius: "0px",}}>
        <CgSoftwareDownload size={50} />
      </Button>

      <style>
        {`
          .resume-container {
            margin-top: 80px;
            display: flex;
            justify-content: center;
            max-height: 800px;
            overflow-y: auto;
          }

          div.react-pdf__Page__textContent.textLayer {
            display: none !important;
          }

          div.react-pdf__Page__annotations.annotationLayer {
            display: none !important;
          }

          @media screen and (max-width: 768px) {
            .resume-container {
              justify-content: stretch;
            }
          }
        `}
      </style>
    </div>
  );
}

export default PdfView;