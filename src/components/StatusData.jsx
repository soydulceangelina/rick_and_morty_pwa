import React, {useState, useEffect} from 'react'
import { fetchQuery } from "../api/rickandmorty";
// assets
import Dead from "../assets/dead.svg";
import Alive from "../assets/alive.svg"
import Unknown from "../assets/unknow-alive.svg"

const url = "https://rickandmortyapi.com/api/character/?status=";

const statusUrls = {
  dead: `${url}dead`,
  alive: `${url}alive`,
  unknown: `${url}unknown`,
};

export default function StatusData() {
  const [deadStatus, setDeadStatus] = useState([]);
  const [aliveStatus, setAliveStatus] = useState([]);
  const [unknownStatus, setUnknownStatus] = useState([]);

  useEffect(() => {
    fetchQuery(statusUrls["dead"], setDeadStatus);
    fetchQuery(statusUrls["alive"], setAliveStatus);
    fetchQuery(statusUrls["unknown"], setUnknownStatus);
  }, []);

  return (
    <div>StatusData</div>
  )
}
