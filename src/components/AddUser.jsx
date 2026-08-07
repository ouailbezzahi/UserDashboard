import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser({ onAddUser }) {
    const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState({ street: "",
    suite: "",
    city: "",
    zipcode: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !companyName) {
      alert("Please fill in all fields");
      return;
    }

    const newUser = {
        id: Date.now(),
        name,
        email,
        company: { name: companyName },
        phone,
        website,
        address: {
            street: address.street,
            suite: address.suite,
            city: address.city,
            zipcode: address.zipcode
        }
    };

    onAddUser(newUser);

    setName("");
    setEmail("");
    setCompanyName("");
    setPhone("");
    setWebsite("");
    setAddress({ street: "", suite: "", city: "", zipcode: "" });

        navigate("/");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>Add New User</h2>
        <div style={{ marginBottom: '10px' }}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: '8px', width: '100%' }}
            />
        </div>
        <div style={{ marginBottom: '10px' }}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: '8px', width: '100%' }}
            />
        </div>
        <div style={{ marginBottom: '10px' }}>
            <input
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                style={{ padding: '8px', width: '100%' }}
            />
        </div>
        <div style={{ marginBottom: '10px' }}>
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ padding: '8px', width: '100%' }}
            />
        </div>
        <div style={{ marginBottom: '10px' }}>
            <input
                type="text"
                placeholder="Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                style={{ padding: '8px', width: '100%' }}
            />
        </div>
        <div style={{ marginBottom: '10px' }}>
            <input
                type="text"
                placeholder="Street"
                value={address.street}
                onChange={(e) => setAddress({ ...address, street: e.target.value })}
                style={{ padding: '8px', width: '100%' }}
            />
        </div>
        <div style={{ marginBottom: '10px' }}>
            <input
                type="text"
                placeholder="Suite"
                value={address.suite}
                onChange={(e) => setAddress({ ...address, suite: e.target.value })}
                style={{ padding: '8px', width: '100%' }}
            />
        </div>
        <div style={{ marginBottom: '10px' }}>
            <input
                type="text"
                placeholder="City"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                style={{ padding: '8px', width: '100%' }}
            />
        </div>
        <div style={{ marginBottom: '10px' }}>
            <input
                type="text"
                placeholder="Zipcode"
                value={address.zipcode}
                onChange={(e) => setAddress({ ...address, zipcode: e.target.value })}
                style={{ padding: '8px', width: '100%' }}
            />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Add User
        </button>
    </form>
  );
  
}

export default AddUser;