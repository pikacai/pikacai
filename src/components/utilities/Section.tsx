interface Props {
  content: any;
  background?: string;
}

function Section({ content, background }: Props) {
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{ background: background ? background : undefined }}
    >
      <div className="w-5/6 py-36">{content}</div>
    </div>
  );
}

export default Section;
