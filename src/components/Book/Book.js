import styled from "styled-components";

export function Book({id, urlImage, author, title}){
    return (
        <BookDiv>
            <img src={urlImage} alt="Livro" />
            <p className="book-list-title">{title} </p>
            <p className="book-list-author">{author}</p>
        </BookDiv>
    )
}

const BookDiv = styled.div`
margin-top: 0.5rem;
margin-left: 1.45rem;
width: 150px;
height: 320px;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 0.5rem;
img{
    width: 130px;
    height: 185px;
    border-radius: 5px;
};

.book-list-title{
    width: 130px;
    max-height: 3.6rem;
    font-size:1.2rem;
    margin-top: 0.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
}

.book-list-author{
    color:#666666;
    width: 130px;
    margin-top: 0.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
`