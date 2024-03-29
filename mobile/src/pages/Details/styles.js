import { StyleSheet } from 'react-native';
import Cosntants from 'expo-constants';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: Cosntants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailList: {
    marginTop: 32
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    marginTop: 48
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414D',
    fontWeight: 'bold', 
    marginTop: 0,   
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },

   contactBox: {
     
     padding: 24,
     borderRadius: 8,
     backgroundColor: '#FFF',
     marginBottom: 16
   },

   heroTitle: {
     fontWeight: 'bold',
     fontSize: 20,
     color: '#13131a',
     lineHeight: 30
   },

   heroDescription: {
     fontSize: 15,
     color: '#727280',
     marginTop: 16
   },

   actions: {
     marginTop: 16,
     flexDirection: 'row',
     justifyContent: 'space-between'
   },

   action: {
     backgroundColor:'#E02041',
     borderRadius: 8,
     height: 50,
     width: '48%',
     justifyContent: 'center',
     alignItems: 'center'
   },

   actionText: {
     color: '#FFF',
     fontSize: 15,
     fontWeight: 'bold'
   }
})