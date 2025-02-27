import { Document, pdfjs, Page } from 'react-pdf';
import resume from '../Assets/resume.pdf'
import { Button } from 'react-bootstrap';
import { CgSoftwareDownload } from 'react-icons/cg';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

function PdfView() {
    return (
        <div className="resume-container">
            <Document file={resume}>
                <Page pageNumber={1} />
            </Document>

            <Button variant="primary flex" download href={resume} 
                    style={{ display: "flex", alignItems: "center", borderRadius: "0px"}}>
                <CgSoftwareDownload size={50} />
            </Button>

            <style>
                {`
                .resume-container {
                margin-top: calc(100% - 60px);
                display: flex;
                justify-content: center;
                max-height: 800px;
                overflow-y: auto;
                margin-top: 80px;
                }

                div.react-pdf__Page__textContent.textLayer {
                display: none !important;
                }

                div.react-pdf__Page__annotations.annotationLayer{
                display: none !important;
                }
                    `}
            </style>

        </div>
    );
}
export default PdfView;