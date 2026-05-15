import Image from "next/image";

export default function GoalsSection() {
  return (
    <section
      style={{ marginTop: "271px", alignSelf: "stretch" }}
      className="flex justify-center"
    >
      <div style={{ width: "1202px" }} className="flex flex-col">
        <p
          className="h2"
          style={{ color: "var(--color-sdp-grey-900)" }}
        >
          SDP 목표는
        </p>

        <div style={{ marginTop: "36px" }}>
          <Image
            src="/herosection2-goals.svg"
            alt="SDP 목표"
            width={1202}
            height={337}
            style={{ width: "1202px", height: "337px" }}
          />
        </div>
      </div>
    </section>
  );
}