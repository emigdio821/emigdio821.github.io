interface ParagraphProps {
  children: React.ReactNode;
}

export const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p style={{ textAlign: "justify", textIndent: "1rem" }}>
      {children}
    </p>
  )
}
