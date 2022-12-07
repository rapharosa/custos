import { Box, Typography } from "@mui/material"

export const CaixaDialogo = (props) => {
    return (
        <Box margin={5}>
            <Box>
                <Typography variant="h5">
                    Seus custos foram de:
                </Typography>
            </Box>
            <Box>
                <Typography>
                    Foram utilizados: {props.area}cm² de material
                    <br/>
                    O custo por mm² foi de R$ {props.custoMm}
                    <br/>
                    O custo da vida util do tubo foi de R$ {props.tubo}
                    <br/>
                    O custo total que você teve foi de R$ {props.total}
                </Typography>
            </Box>
        </Box>
    )
}