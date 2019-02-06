<template>
  <div class="container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

        <b-form-group id="groupUSUARIO" label="Usuario:" label-for="USUARIO">                    
          <b-form-input id="USUARIO" type="text" v-model="form.USUARIO" required placeholder="Usuario"></b-form-input>
        </b-form-group>

        <b-form-group id="groupCOMPANIA" label="Compañía:" label-for="COMPANIA">                    
          <b-form-input id="COMPANIA" type="text" v-model="form.COMPANIA" required placeholder="Compañía"></b-form-input>
        </b-form-group>

        <b-form-group id="groupPERFIL" label="Perfil:" label-for="PERFIL">
          <b-form-select id="PERFIL" :options="perfiles" required v-model="form.PERFIL"></b-form-select>
        </b-form-group>

        <b-form-group id="groupTIPODOC" label="Tipo de documento:" label-for="TIPODOC">
          <b-form-select id="TIPODOC" :options="tipoDocumentos" required v-model="form.TIPODOC"></b-form-select>
        </b-form-group>

        <b-form-group id="groupDOCUMENTO" label="Documento:" label-for="DOCUMENTO">                    
          <b-form-input id="DOCUMENTO" type="text" v-model="form.DOCUMENTO" required placeholder="1119882732"></b-form-input>
        </b-form-group>

        <b-form-group id="groupNOMBRE" label="Nombre:" label-for="NOMBRE">                    
          <b-form-input id="NOMBRE" type="text" v-model="form.NOMBRE" required placeholder="Nombre"></b-form-input>
        </b-form-group>

        <b-form-group label="Estado" id="groupNOMBRE" label-for="ESTADO">
          <b-form-radio-group id="ESTADO" v-model="form.ESTADO" :options="estados"></b-form-radio-group>
        </b-form-group>

        <b-form-group id="groupFORMATO_FECHA" label="Formato de fecha:" label-for="FORMATO_FECHA">
          <b-form-select id="FORMATO_FECHA" :options="formatosFecha" required v-model="form.FORMATO_FECHA"></b-form-select>
        </b-form-group>

      <b-form-group id="exampleInputGroup1" label="Email:" label-for="exampleInput1" description="Nunca compartiremos su correo electrónico con nadie más.">
        <b-form-input id="exampleInput1" type="email" v-model="form.EMAIL" required placeholder="Ingresse su email"></b-form-input>
      </b-form-group>

        <b-form-group label="Fecha inserción" id="groupNOMBRE" label-for="FECHA_INSERCION">
          <date-picker v-model="form.FECHA_INSERCION" :config="configFechaInsercion"></date-picker>
        </b-form-group>
     
<!-- 
      <b-form-group id="exampleGroup4">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group> -->
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        "USUARIO": "ABEC",
        "COMPANIA": "TRANSA",
        "PERFIL": "ADMINISTRATIVO",
        "TIPODOC": "CC",
        "DOCUMENTO": 1014,
        "NOMBRE": "ANDRES BECERRA",
        "ESTADO": "A",
        "FORMATO_FECHA": "DD/MM/YYYY",
        "EMAIL": "felipe@micorreo.com",
        "USUARIO_INSERCION": "ABEC",
        "USUARIO_MODIFICACION": null,
        "FECHA_INSERCION": new Date(),
        "FECHA_MODIFICACION": new Date().getTime(),
        "TRANSPORTADOR_AUTORIZA": "transportador 1",
        "IP_USUARIO": null
      },
      
      perfiles:["ADMINISTRATIVO","OPERATIVO","CONTRATISTA"],
      tipoDocumentos:["CC","TI","OTRO"],
      estados:["A","B","C"],
      formatosFecha:["DD/MM/YYYY","DD-MM-YYYY","YYYY-MM-DD"],
      configFechaInsercion:{format: 'DD/MM/YYYY',useCurrent: true,},
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      let data = Object.assign({}, this.form);
      data.FECHA_INSERCION = data.FECHA_INSERCION.getTime();
      console.log({data});  
      const auth = {
            // headers: {Authorization:'JWT ' + localStorage.getItem('token')} 
            headers:{ headers: {'Content-Type':'application/json'} }
        }
        let uri = 'http://localhost:3000/users';
              this.axios.get(uri).then((response) => {
                  // this.tickets = response.data;
                  console.log({response}); 
              });
      // this.$http.get('http://localhost:3000/users',auth).then(resp=>{
      //   console.log({resp});        
      // });
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
        this.form.USUARIO= "",
        this.form.COMPANIA= "",
        this.form.PERFIL= "",
        this.form.TIPODOC= "",
        this.form.DOCUMENTO= null,
        this.form.NOMBRE= "",
        this.form.ESTADO= "",
        this.form.FORMATO_FECHA= "",
        this.form.EMAIL= null,
        this.form.USUARIO_INSERCION= "",
        this.form.USUARIO_MODIFICACION= null,
        this.form.FECHA_INSERCION= 0,
        this.form.FECHA_MODIFICACION= null,
        this.form.TRANSPORTADOR_AUTORIZA= null,
        this.form.IP_USUARIO= null
      /* Trick to reset/clear native browser form validation state */
      // this.show = false;
      // this.$nextTick(() => { this.show = true });
    }
  }
}
</script>