const NomProfessio = (props) => {
  return (
    <div>
      <h2>
        {props.nom}
      </h2>
      <h2>{props.professio}</h2>
    </div>
  );
};

export default NomProfessio;