import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  height: 50,
  width: 420,
  margin: 20,

  marginLeft:440,
  marginTop:10,
  display: 'inline-block',
  borderRadius:20
};

const PaperExampleSimple = () => (
  <div>
<Paper style={style} zDepth={4}  >
   <TextField textareaStyle={{marginLeft:50,width:50}}/>
</Paper>


  </div>
);

export default PaperExampleSimple;
