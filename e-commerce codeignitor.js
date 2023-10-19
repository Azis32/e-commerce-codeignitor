cfg.Light
cfg.MUI


function OnStart() {
  color = MUI.colors.teal;
 app.InitializeUIKit(color.teal);
 lay = MUI.CreateLayout("Absolute", "FillXY");
 apb = MUI.CreateAppBar("Tenan", "menu", "");
// apb.SetOnMenuTouch(OnMenuTouch1);
// apb.SetOnControlTouch(OnControlTouch);
 apb.GetHeight();
 pageLay = MUI.CreateLayout("Linear", "horizontal");
 pageLay5 = MUI.CreateLayout("Linear", "horizontal");
 pageLay2 = MUI.CreateLayout("Linear", "Vertical,FillXY");
 pageLay3 = MUI.CreateLayout("Linear", "horizontal,fillx");
 pageLay4 = MUI.CreateLayout("Linear", "horizontal");
 yx = MUI.CreateTextH2("", 1,0.1);
 pageLay2.AddChild(yx);
 img = app.CreateImage("Img/ChartJS.png",0.5);
 pageLay2.AddChild(img);
 yx = MUI.CreateTextH2("", 1,0.1);
 pageLay2.AddChild(yx);
 btn1 = MUI.CreateButtonRaisedO("[fa-pencil] ",0.3);
// btn1.SetOnTouch(Start);
 pageLay3.AddChild(btn1);

 btn8 = MUI.CreateButtonRaisedO("[fa-cloud_upload] IMPORT",0.3);
// btn8.SetOnTouch(importXLS);
 pageLay5.AddChild(btn8);
 btn9 = MUI.CreateButtonRaisedO("[fa-book] LAPORAN",0.3);
 //btn9.SetOnTouch(lihatDataPenjualan);
 pageLay5.AddChild(btn9);
 btn3 = MUI.CreateButtonRaisedO("[fa-book] VIEW DATA",0.3);
// btn3.SetOnTouch(printBiasa);
 pageLay2.AddChild(pageLay3);
 pageLay3.AddChild(btn3);
 btn7 = MUI.CreateButtonRaisedO("[fa-pencil]+TENAN",0.3);
 //btn7.SetOnTouch(inputProduk);
 pageLay3.AddChild(btn7);
 pageLay2.AddChild(pageLay4);
 pageLay2.AddChild(pageLay5);
 lay.AddChild(pageLay2);
 lay.AddChild(apb);
 app.AddLayout( lay )
}