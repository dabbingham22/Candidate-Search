import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = async () => {
  const searched = await useEffect(searchGithub); //use effect to make searchGithub not a promise
  return <div><h1>CandidateSearch</h1>
      <h2>{searched}</h2>
  </div>;
};

export default CandidateSearch;
