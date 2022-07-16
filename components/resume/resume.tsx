export const ResumeViewer: React.FC = () => {
  return (
    <>
      <div className="mx-auto mb-24 flex flex-col items-center justify-center md:container">
        <div className="title">RESUME</div>
        <embed
          className="w-full md:w-3/5"
          src="/assets/resume.pdf"
          type="application/pdf"
          width="60%"
          height="1200"
        />
      </div>
    </>
  )
}
