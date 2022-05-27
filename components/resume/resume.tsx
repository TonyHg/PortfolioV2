export const ResumeViewer: React.FC = () => {
  return (
    <>
      <div className="çontainer mx-auto mb-24 flex flex-col items-center justify-center">
        <div className="title">RESUME</div>
        <embed
          src="/assets/resume.pdf"
          type="application/pdf"
          width="60%"
          height="1200"
        />
      </div>
    </>
  )
}
