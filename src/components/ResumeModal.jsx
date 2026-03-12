import { FiDownload, FiX } from 'react-icons/fi'

const RESUME_PDF = '/resume.pdf'

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = RESUME_PDF
    link.download = 'Rahul_NP_Resume.pdf'
    link.rel = 'noopener noreferrer'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Close"
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl bg-[#0d0d20] border border-indigo-500/20 shadow-2xl shadow-indigo-500/10 p-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-500 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Close"
        >
          <FiX size={20} />
        </button>

        <h2 id="resume-modal-title" className="text-xl font-bold text-white mb-2 pr-8">
          Download Resume
        </h2>
        <p className="text-slate-400 text-sm mb-6">
          Do you want to download my resume (PDF)?
        </p>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleDownload}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors"
          >
            <FiDownload size={18} />
            Yes, Download
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-medium rounded-xl transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
