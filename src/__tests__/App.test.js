import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

// qui dentro scriveremo i nostri tests, per App e (per comodità) anche per gli altri componenti

// creiamo il nostro primo gruppo di tests
// i gruppi di test solitamente si dividono in macro-sezioni
// ogni macro sezione viene identificata con la parola "describe"

describe('General mounting', () => {
  // sono dentro la suite di tests chiamata "General mounting"
  // ora cominciamo a scrivere dei tests individuali, per testare
  // diverse aspettative per la pagina

  // creiamo il primo test: voglio verificare che nella pagina sia presente
  // l'<h1> dichiarato in App.js e che contenga il titolo previsto ("A simple react-testing example")
  it('correctly mounts the heading', () => {
    // 1) monto App nel VIRTUAL DOM
    render(<App />) // non comparirà nella pagina, è un montaggio "virtuale"
    // screen è il contenuto del VIRTUAL DOM
    // 2) cerco tramite il suo contenuto testuale l'h1 che dovrebbe essere stato montato
    const h1 = screen.getByText(/a simple react-testing example/i)
    // 3) non c'è, perchè con un titolo non abbiamo interazione
    // 4) ci aspettiamo che l'h1 si trovi nel documento (del VIRTUAL DOM)
    expect(h1).toBeInTheDocument()
  })

  it('correctly mounts the primary button', () => {
    // 1) monto App nel VIRTUAL DOM
    render(<App />) // non comparirà nella pagina, è un montaggio "virtuale"
    // 2) cerco tramite il suo contenuto testuale il button nel componente HiddenSection
    const button = screen.getByText(/show section/i)
    // const button = screen.getByRole('button')
    // 3) non c'è, perchè con un titolo non abbiamo interazione
    // 4) ci aspettiamo che il button si trovi nel documento (del VIRTUAL DOM)
    expect(button).toBeInTheDocument()
  })
})

describe('Primary button behavior', () => {
  it('makes the card visible when the button is clicked', () => {
    // 1)
    render(<App />)
    // 2)
    const button = screen.getByRole('button') // l'unico bottone presente al momento
    // 3)
    fireEvent.click(button) // il robottino clicca il pulsante "SHOW SECTION"
    // 4)
    const image = screen.getByRole('img') // ora dovrebbe esserci nel DOM l'immagine del cane!
    expect(image).toBeInTheDocument()
  })

  it('makes the card invisible again if the button is clicked twice', () => {
    // 1)
    render(<App />)
    // 2)
    const button = screen.getByRole('button') // l'unico bottone presente al momento
    // 3)
    fireEvent.click(button) // il robottino clicca il pulsante "SHOW SECTION"
    fireEvent.click(button) // il robottino clicca il pulsante "SHOW SECTION"
    // 4)
    const image = screen.queryByRole('img') // queryBy torna null invece che errore se l'elemento non viene trovato
    expect(image).not.toBeInTheDocument()
    // expect(image).toBeFalsy() // stessa cosa, verifichiamo che l'elemento assente sia "falsy"
    // expect(image).not.toBeTruthy() // idem
  })

  it('makes the card visible and changes button label when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    // cerchiamo l'immagine e cerchiamo un elemento con testo "HIDE SECTION"
    const image = screen.getByRole('img')
    const sameButton = screen.getByText(/hide section/i)

    const cardTitle = screen.getAllByText(/card title/i) // un array di due elementi!

    expect(image).toBeInTheDocument()
    expect(sameButton).toBeInTheDocument()
    expect(cardTitle).toHaveLength(2)

    const oldButton = screen.queryByText(/show section/i)
    expect(oldButton).not.toBeInTheDocument()
  })
})
