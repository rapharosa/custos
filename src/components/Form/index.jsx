import { Box, Button, MenuItem, TextField } from "@mui/material"
import React, { useState } from "react"
import { CaixaDialogo } from "../CaixaDialogo";

export const Formulario = () => {

    const materiais = [
        {
            value: 'MDF',
            label: 'MDF',
        },
        {
            value: 'Acrilico',
            label: 'Acrilico',
        },
        {
            value: 'Couro',
            label: 'Couro',
        },
        {
            value: 'Tecido',
            label: 'Tecido',
        },
        {
            value: 'Papel',
            label: 'Papel',
        },
        {
            value: 'Papelão',
            label: 'Papelão',
        },
        {
            value: 'EVA',
            label: 'EVA',
        },
        {
            value: 'Feltro',
            label: 'Feltro',
        },
    ];

    const [currency, setCurrency] = useState('');
    const [espessura, setEspessura] = useState('')
    const [altura, setAltura] = useState('')
    const [largura, setLargura] = useState('')
    const [tempo, setTempo] = useState('')
    const [valor, setValor] = useState('')
    const [alturaChapa, setAlturaChapa] = useState('')
    const [larguraChapa, setLarguraChapa] = useState('')

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const area = (altura * largura)/100
    const custoDoMilimetroQuadrado = (valor / (alturaChapa * larguraChapa))
    const custoTempoUsoTubo =  tempo / (480000 / 3000)
    const custoTotal = (custoDoMilimetroQuadrado * 1.2) + custoTempoUsoTubo

    const resultado = () => {
        
        console.log(', e o custo total foi de R$' + custoTotal)        
    }

    return (
        <Box marginTop={5} display='flex' flexDirection='column' width={800} gap={3}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="Material"
                    select
                    label="Selecione o material"
                    value={currency}
                    onChange={handleChange}
                >
                    {materiais.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>

            <TextField
                placeholder="Espessura em mm"
                label='Espessura do material'
                value={espessura}
                onChange={espessura => setEspessura(espessura.target.value)}
            />

            <TextField
                laceholder="Altura em mm"
                label='Altura do material'
                value={altura}
                onChange={altura => setAltura(altura.target.value)}
            />

            <TextField
                placeholder="Largura em mm"
                label='Largura do material'
                value={largura}
                onChange={largura => setLargura(largura.target.value)}
            />

            <TextField
                placeholder="Valor da chapa do material em R$"
                label='Valor da chapa'
                value={valor}
                onChange={valor => setValor(valor.target.value)}
            />

            <TextField
                placeholder="Altura da chapa inteira em mm"
                label='Altura da chapa inteira em mm'
                value={alturaChapa}
                onChange={totalArea => setAlturaChapa(totalArea.target.value)}
            />

            <TextField
                placeholder="Largura da chapa inteira em mm"
                label='Largura da chapa inteira em mm'
                value={larguraChapa}
                onChange={larguraChapa => setLarguraChapa(larguraChapa.target.value)}
            />

            <TextField
                placeholder="Tempo de corte em min"
                label='Tempo de corte em min'
                value={tempo}
                onChange={tempo => setTempo(tempo.target.value)}
            />
            <Button variant="contained" onClick={resultado}>Enviar</Button>


            <CaixaDialogo area={area.toFixed(2)} custoMm={custoDoMilimetroQuadrado.toFixed(2)} tubo={custoTempoUsoTubo.toFixed(2)} total={custoTotal.toFixed(2)}/>
        </Box>
    )
}