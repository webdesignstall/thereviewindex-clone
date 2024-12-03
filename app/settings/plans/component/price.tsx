import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Price() {
  return (
    <Tabs defaultValue="month" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="month">Monthly</TabsTrigger>
        <TabsTrigger value="annual">Annual</TabsTrigger>
      </TabsList>
      <TabsContent value="month">
        <Card>
          <CardHeader>
            <CardTitle className="text-md uppercase ">Enterprise</CardTitle>
            <CardDescription className="hidden">
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <div className="w-full pb-3">
                <p className="text-3xl font-semibold text-center">Custom</p>
              </div>
              <div className="w-full pb-4">
                <Button className="w-full py-6 rounded-lg text-lg hover:bg-blue-600" variant='outline'>Request Quote</Button>
              </div>
              <div className="pb-3">
                <p className="text-gray-400 pb-2 font-semibold">INCLUDED</p>
                <div className="space-y-3">
                  <p>Custom products / month</p>
                  <p>30+ eCommerce channels</p>
                  <p>100% translations</p>
                  <p>Unlimited Users</p>
                </div>
              </div>
              <div>
                <p className="text-gray-400 uppercase font-semibold pb-2">PLUS</p>
                <div className="space-y-3">
                  <p>Custom Channels</p>
                  <p>Custom Models</p>
                  <p>Instant Full Category Reports</p>
                  <p>Dedicated Account Manager</p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="annual">
        <Card>
          <CardHeader>
            <CardTitle className="text-md uppercase ">Enterprise</CardTitle>
            <CardDescription className="hidden">
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <div className="w-full pb-3">
                <p className="text-3xl font-semibold text-center">Custom</p>
              </div>
              <div className="w-full pb-4">
                <Button className="w-full py-6 rounded-lg text-lg hover:bg-blue-600" variant='outline'>Request Quote</Button>
              </div>
              <div className="pb-3">
                <p className="text-gray-400 pb-2 font-semibold">INCLUDED</p>
                <div className="space-y-3">
                  <p>Custom products / month</p>
                  <p>30+ eCommerce channels</p>
                  <p>100% translations</p>
                  <p>Unlimited Users</p>
                </div>
              </div>
              <div>
                <p className="text-gray-400 uppercase font-semibold pb-2">PLUS</p>
                <div className="space-y-3">
                  <p>Custom Channels</p>
                  <p>Custom Models</p>
                  <p>Instant Full Category Reports</p>
                  <p>Dedicated Account Manager</p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
