export default function Home() {
  const products = [
    { name: "HIGHSEA R1", price: "128.000.000 VND", type: "Gas", image: "/p1.png" },
    { name: "TRP98-DFI", price: "138.000.000 VND", type: "Gas", image: "/p2.png" },
    { name: "WAKE EP 55", price: "98.000.000 VND", type: "Electric", image: "/p3.png" },
    { name: "WAKE RACING", price: "196.000.000 VND", type: "Electric", image: "/p4.png" },
  ];

  return (
    <div style={{ background: "black", color: "white", padding: 20 }}>
      <h1>1M63 MotorSurf</h1>

      {products.map((p, i) => (
        <div key={i} style={{ marginTop: 40 }}>
          <img src={p.image} width="300" />
          <h2>{p.name}</h2>
          <p>{p.type}</p>
          <p style={{ color: "orange" }}>{p.price}</p>
        </div>
      ))}
    </div>
  );
}
