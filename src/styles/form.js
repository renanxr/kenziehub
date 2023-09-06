import styled from "styled-components";

export const StyledFieldBox = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`

export const StyledInput = styled.input`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .625rem 1.0152rem;
    gap: .6344rem;
    background: var(--grey-2);
    border: .0761rem solid var(--grey-2);
    border-radius: .25rem;
    color: var(--grey-0);
    font-family: var(--font-primary);
    font-style: normal;
    font-weight: 400;
    font-size: 1.0152rem;
    line-height: 1.625rem;
    &:focus {
        border: .0761rem solid var(--grey-0);
        color: var(--grey-0)
    }
`

export const StyledSelect = styled.select`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .625rem 1.0152rem;
    gap: .6344rem;
    background: var(--grey-2);
    border: .0761rem solid var(--grey-2);
    border-radius: .25rem;
    color: var(--grey-1);
    font-family: var(--font-primary);
    font-style: normal;
    font-weight: 400;
    font-size: 1.0152rem;
    line-height: 1.625rem;
    &:focus {
        border: .0761rem solid var(--grey-0);
        color: var(--grey-0)
    }
`

export const StyledLabel = styled.label`
font-family: var(--font-primary);
font-style: normal;
font-weight: 400;
font-size: .7614rem;
line-height: 0rem;
color: var(--grey-0);
display: flex;
margin-bottom: 1rem;
`