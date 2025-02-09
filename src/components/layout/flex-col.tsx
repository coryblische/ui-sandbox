export default function FlexCol({ children }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      {children}
    </div>
  )
}