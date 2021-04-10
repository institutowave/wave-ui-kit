import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.footer`
  background: ${theme.color.secondaryColor};
  color: ${theme.white};
  overflow: hidden;
  color: white;

  nav {
    background: ${theme.color.blackFooter};
    min-height: 8rem;
    display: flex;
    align-items: center;
    padding: 2rem;
    justify-content: center;

    ul {
      display: flex;
      align-items: center;
      list-style: none;

      display: grid;
      grid-template-columns: repeat(5, 1fr);

      li {
        text-transform: uppercase;
        font-size: 1.5rem;
        text-align: center;

        a {
          color: ${theme.color.white};
          text-decoration: none;
          font-size: 1.5rem;
        }
      }

      li:last-child {
        display: flex;
        white-space: nowrap;

        ol {
          margin-left: 2rem;
          display: flex;
          list-style: none;

          > li {
            & + li {
              margin-left: 2rem;
            }

            svg {
              transition: 0.3s;

              &:hover {
                fill: ${theme.color.primaryColor};
              }
            }
          }
        }
      }

      @media (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 3rem 2rem;
        padding: 3rem 0;
      }

      @media (max-width: 680px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 550px) {
        grid-template-columns: 1fr;
        width: 100%;
        padding: 5rem 0;

        li:last-child {
          flex-direction: column;
          align-items: center;

          ol {
            margin-top: 2rem;
          }
        }
      }
    }
  }
`

export const Content = styled.div`
  padding: 5rem;
  padding-bottom: 5rem;

  ul.footer-texts {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-gap: 5rem;

    padding: 5rem 0;

    li {
      h4 {
        font-size: 2.2rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 2rem;
      }
    }
  }

  .contact-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0 5rem 5rem;

    img {
      height: 100%;
      max-height: 11rem;
    }

    .contact {
      font-size: 2rem;

      h4 {
        text-transform: uppercase;
      }

      ul {
        list-style: none;

        li {
          margin-top: 0.9rem;

          a {
            text-decoration: none;
            color: ${({ theme }) => theme.white};
            display: flex;
            align-items: center;

            svg {
              margin-left: 1rem;
              font-size: 2.2rem;
            }
          }

          &:first-child {
            a svg {
              transform: rotateZ(90deg);
            }
          }

          &:last-child {
            a svg {
              margin-top: 0.5rem;
            }
          }
        }
      }
    }

    ul.address {
      list-style: none;
      font-size: 2rem;

      li {
        display: flex;
        align-items: center;

        svg {
          margin-left: 1rem;
          font-size: 2.5rem;
        }

        & + li {
          margin-top: 0.9rem;
        }
      }
    }

    .follow-that-wave {
      width: 100%;
      max-width: 20.6rem;

      h4 {
        font-size: 2rem;
        text-transform: uppercase;
        text-align: center;
      }

      button {
        background: ${theme.color.primaryColor};
        color: ${theme.color.white};
        font-size: 1.6rem;
        border-radius: 2.8rem;
        width: 100%;
        padding: 1.2rem 0.5rem;
        text-transform: uppercase;
        font-weight: bold;
        border: 2px solid ${theme.color.primaryColor};
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          background: transparent;
          color: ${theme.color.primaryColor};
        }
      }
    }

    @media (max-width: 1150px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 5rem 2rem;
    }

    @media (max-width: 760px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      margin: 0 auto;
      border-top: 0;
      grid-gap: 0;

      ul.address,
      .follow-that-wave {
        margin-top: 5rem;
      }

      > a {
        order: 4;
        align-self: center;
        margin-top: 5rem;

        img {
          max-height: 9rem;
        }
      }

      ul.address {
        border-bottom: 1px solid #ffffff66;
        padding-bottom: 2rem;
        width: 100%;
      }

      .follow-that-wave {
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 25rem;
      }
    }
  }
`
