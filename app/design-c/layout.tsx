export default function DesignCLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ isolation: 'isolate' }}>
      {children}
    </div>
  );
}
