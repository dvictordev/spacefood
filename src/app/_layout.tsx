import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar'
import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
} from '@expo-google-fonts/inter'
import { Loading } from "@/components/loading";

export default function Layout(){
   const [fontsLoaded]= useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold
    })

    if(!fontsLoaded){
        return <Loading />
    }
    return (
        <SafeAreaView className="flex-1 bg-slate-900">
            <StatusBar translucent style={"light"}/>
            <Slot />
        </SafeAreaView>
    )
}