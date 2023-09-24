"use client"
import { Navbar } from "@/components/ui/navbar"
import {KubeConfigs} from "@/components/ui/kubeconfig"
import {Namespaces} from "@/components/ui/namespaces"
import { Pods } from "@/components/ui/pods"
import { Alerts } from "@/components/ui/alerts"

  export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <KubeConfigs />
      <Namespaces />
      <Pods />
      <Alerts />
    </main>
  )
}
