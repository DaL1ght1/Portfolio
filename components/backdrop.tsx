export default function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
      <div className="absolute -right-40 top-[40%] h-[360px] w-[360px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="scroll-progress fixed inset-x-0 top-0 h-0.5 bg-primary" />
    </div>
  )
}
