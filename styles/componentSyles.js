import { StyleSheet } from 'react-native';
export const homeStyle = {
    heading: {
      color: "orange",
      textAlign: "center",
      fontFamily: "monospace",
      fontSize: 20, // Use numeric value without "px"
      marginVertical: 5, // Adjust as needed
    },
  };
  
  export const buttonStyle = {
    navbutton: {
      flex: 1,
      width: 40, // Use numeric value without "px"
      color: "orange",
      margin: 5, // This is fine for margin on all sides
    },
  };
  // navbarStyles.js


export const navbarStyles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: 15
  },
  heading: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export const postStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color:"white",
  },
  postContainer: {
    padding: 16,
    color:"white",
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:"white",
    marginBottom: 8,
  },
  postImage: {
    width: '100%',
    height: 200, // Adjust the height as needed
    resizeMode: 'contain',
    borderRadius: 8,
    marginTop: 10,
  },
});
