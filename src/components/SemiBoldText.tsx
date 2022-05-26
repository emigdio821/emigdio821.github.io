interface SemiBoldTextProps {
  children: React.ReactNode;
}

export const SemiBoldText = ({ children }: SemiBoldTextProps) => (
  <span style={{ fontWeight: 600 }}>{children}</span>
);
