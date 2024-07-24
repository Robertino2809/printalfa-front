import Button from "@/components/Button";
import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {signIn, signOut, useSession} from "next-auth/react"
import styled from "styled-components";
import { useEffect, useState } from "react";
import Input from "@/components/Input";
import axios from "axios";
import WhiteBox from "@/components/WhiteBox";
import Spinner from "@/components/Spinner";

const CityHolder = styled.div`
  display:flex;
  gap: 5px;
`;

export default function AccountPage() {
  const {data:session} = useSession();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [city,setCity] = useState('');
  const [postalCode,setPostalCode] = useState('');
  const [streetAddress,setStreetAddress] = useState('');
  const [country,setCountry] = useState('');
  const [setAddressLoaded] = useState(true);
  const [orderLoaded] = useState(true);

  async function logout() {
    await signOut({
      callbackUrl: process.env.NEXT_PUBLIC_URL,
    });
  }
  async function login() {
    await signIn('google')
  }
  function saveAddress() {
    const data = {name, email, city, streetAddress, postalCode, country};
    axios.put('/api/address', data);
  }
  useEffect(() => {
      axios.get('/api/address').then(response => {
        setName(response.data.name);
        setEmail(response.data.email);
        setCity(response.data.city);
        setPostalCode(response.data.postalCode);
        setStreetAddress(response.data.streetAddress);
        setCountry(response.data.country);
        setAddressLoaded(true);
      })
  }, [])
  return (
    <>
      <Header />
      <Center>
        <div className="grid grid-cols-2 gap-10 my-10">
          <div>
            <WhiteBox>
              <h2>Wishlist</h2>
            </WhiteBox>
          </div>
          <div>
            <WhiteBox>
              <h2>Account details</h2>
              {!orderLoaded && (
                <Spinner fullWidth={true} />
              )}
              {orderLoaded && (
                <>
                  <Input type="text"
                     placeholder="Name"
                     value={name}
                     name="name"
                     onChange={ev => setName(ev.target.value)} />
                  <Input type="text"
                        placeholder="Email"
                        value={email}
                        name="email"
                        onChange={ev => setEmail(ev.target.value)}/>
                  <CityHolder>
                    <Input type="text"
                          placeholder="City"
                          value={city}
                          name="city"
                          onChange={ev => setCity(ev.target.value)}/>
                    <Input type="text"
                          placeholder="Postal Code"
                          value={postalCode}
                          name="postalCode"
                          onChange={ev => setPostalCode(ev.target.value)}/>
                  </CityHolder>
                  <Input type="text"
                        placeholder="Street Address"
                        value={streetAddress}
                        name="streetAddress"
                        onChange={ev => setStreetAddress(ev.target.value)}/>
                  <Input type="text"
                        placeholder="Country"
                        value={country}
                        name="country"
                        onChange={ev => setCountry(ev.target.value)}/>
                  <Button black block
                          onClick={saveAddress}>
                    Save
                  </Button>
                  <hr />
                </>
              )}
              <hr />
              {session && (
                <button className="w-40 h-10 bg-red-500" onClick={logout}>Logout</button>
              )}
              {!session && (
                <button className="w-40 h-10 bg-red-500" onClick={login}>Login</button>
              )}
            </WhiteBox>
          </div>
        </div>
      </Center>
      <Footer />
    </>
  )
}
