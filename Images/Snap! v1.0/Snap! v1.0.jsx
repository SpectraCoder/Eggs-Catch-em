//*************************************************************
// AE Sweets "Snap!"
// Authors: Tihomir Trifonov a.k.a. Mastermind & Jeliod Dimitrov a.k.a. Arsek
// http://aesweets.com/snap/
//
// Royalty free script, use it as you will.
// No usless lines of code except this one :)
//*************************************************************

var AeSweetsSnap = function( $this ){
    
    var
    
    //[ Variables ]################################//
    
    /*private **/ toolbar = $this instanceof Panel ? $this : new Window( 'palette', 'AESweets - Snap!', undefined, {resizeable:true} ),
    /*private ScriptUIGraphics*/ globalG = toolbar.graphics,
    /*private Folder*/ folderExport = null,
    /*private float*/ aeVersion = parseFloat( app.version ),
    /*private float*/ aeUiBrightness = 0,
    /*private ImageObject*/ iconCameraStatic = { source: "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00X\x00\x00\x00\x18\b\x06\x00\x00\x00~\u00CD:X\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x03fiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.0-c060 61.134777, 2010/02/12-17:32:00        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmpMM:OriginalDocumentID=\"xmp.did:0180117407206811A4AAD700DBD3D4D9\" xmpMM:DocumentID=\"xmp.did:EE3C854BF46D11E280AC990569DDB197\" xmpMM:InstanceID=\"xmp.iid:EE3C854AF46D11E280AC990569DDB197\" xmp:CreatorTool=\"Adobe Photoshop CS5 Macintosh\"> <xmpMM:DerivedFrom stRef:instanceID=\"xmp.iid:0280117407206811A4AAD700DBD3D4D9\" stRef:documentID=\"xmp.did:0180117407206811A4AAD700DBD3D4D9\"/> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>8\u00D8>W\x00\x00\x07\u0092IDATx\u00DA\u00ECYkLTG\x14\u00DE\x17\u00B0\x0F\u009E\u00C2\x02\u00CB\u00AB h\u00ECZ\x14\u00A4%\x02\u0082\u0080\u00A1&\x1A\"6h\u00C4X#&\u0086\u00F6\u0087Z\u008D\u00A6\u0089\u00A61\u00F1\u00F1\u00CB&V\u008DQb4\u00BE\u00A2\u00FF\u00AC&\u00AD\u00A8X\u00A8B\u00A9\x16\x04\u0085\"\x14\t  \u00EF\u00B5\x0B,\u00B0\u00B0\x0B\u00F4;d\u0096\\\u00AEw\u00D9]|\u00A4\u00D2Nr2\u00B3sg\u00CE\u009C\u00F9\u00EE\u0099\u00EF\u009C\u00B9+\x16Y/\u0081\x10WH7\u00E4\u0095\u00E8\x1D\u0095\u00F1\u00F1q\u00D1l.b+\u00FD\u00C9b\u00B1x\x05j\x17\u00D4=ccc?\u00A2\u00FD\u00FC\x7F\u0080\u00DF\x0E\u00C0\x0B!\u00D9\u00DC\x0E\u00A9T\u00DA7::\u00FA\x03\u009A}\u00FF\x03<3\u0080\x15\u0090\u00CF \u009E...\u00DA\u00E1\u00E1a\x1F\u00FE@\u0099LVc6\u009B{\u00D0\u0094\u00BC\u00E1z&H\x1D\u00E4\u00AF\u00FF\n\u00C0^\u00F0\u00D0/\u00E1\u00A1!\u00EFmQ\u00B1x\x14\u00C0\u00DEE\u00B3`\u009C\u00830\u00FA?t<S \u00AB9\u00BFs%*\u0095j\u00F9\u00FB\x04\u0097y\u00ADT\"\u0091|\u00EE\u00E4\u00E4\u00A4\u0099M\u00DE\x1A\x1D\x1D\u00ED\u00C9\u00FD\u009D\u0094\u0094\u00E4*\x03%\u0084\x0F\f\f8\u00AC\u00CC\u00CD\u00CD\u00CD\u00E8\u00EE\u00EEn\u0084\u00D7\u008D\x1B\u008DFYOO\u008F\u00DB4\u0080\u00DE\u00E4x\u00E9\x1A\u00AA\x118\u00A5\x11\x11\x11\x01h\u00B6\u00CDf\u008A\u0090Qqd\u0082\u0097\u0097\u00D7@fff}FF\u00C6\u00CB\u00E5\u00CB\u0097\u00EB\u00E5r\u00F9Xuu\u00B5\u00F2\u00CE\u009D;\u009A\u00F3\u00E7\u00CF\u0087\u00D5\u00D6\u00D6\u00FA\x0BPB\x11\u00E7\u00E7\x1A\u008E.\u0085h\u0096\x17\x19\u00BC\u00CBn\u00E2\x0B\r\r\u00D5]\u00B8p\u00E17\x00K)\u00DB\u00DF\u0090a\u00F2`\x14\u00D9\u00A2E\u008B\\\u00F7\u00EE\u00DD\x1B\u00B8v\u00ED\u00DA\u00B8\x1B7n,\u00E0M\u00FD^H\x1Fh\u00C2\u00DAR\u00DE\u008C\u00CF\u0082\u0098\u0088X\u009AH\u00C1\u00F1!d\u0088q\u009D\u00E5\x19\u00F5\u00B7BR!\u00F3\u00D8\u00F3\u00A7\u0090B\u0088\u008E\u00A3\u0097^\u00E8R&\u00DEl\u00DCC6w)g\u00DC\u00CF\u00AC/\u0087\u00D3W\x00Y\u00CCD\u00C1\u009E?\u00E5\u00D8#\f\u00B0\u00BDY\x01\u00BC\u00CDp\u00E9\u00D2\u00A5\u0082\u00C4\u00C4\u00C4'\x00\u00952\u0081hH\x14\u00C4\t\u00BF\x1BQ\u00FF\x0E\u00A9\x06\u00D8\u00FD\t\t\t\u008A\u0092\u0092\u0092\u008Ff\u00F8\u00D2\u0083\u00A0/\x07z\u00F8\u00DEM\u00C0\u00CDsvvV\u008D\u008C\u008C\u00FC\u00E4\u00E3\u00E3\x13\x01Z\nfid0\u00E2\u0088\u009C\x0F$^\u00E0|P\u00D11\x06\u0080\x02z\u00BF\u0082\u00DE@\u00DE\u00B8\x14\x01.\u009DSQQ\u00D1\u00CA\u00D6\u00B48C0tq\u00D7\bb\u00B6FA\u00E71k\u009B\u0091\u0080!F\u00ED\u00D95<\u00F3\x19\u00C0\u00AD\u0080B3\x16\u00CBDW\x16\u00E4cH\x04$\r}_\u00A3V\u00E3y\u00F3\u00F6\u00ED\u00DB\u008B\u0095J\u00E5\u00F0L\u00D0\x05\u00AF'r\u00C1\u00D5h4\u00FA\u00F0\u00F0\u00F0nK\u00BB\u00A0\u00A0\u00A0\u009E\u00DA\u0088\x1D\u0093\u00D4\u00C6\x03w\u00B2\x00\u00909\u00A0\u00B0\x04j#\u00A0\u00A6\u00F3\u00C0\u009D.\u00BEH\x05t\u00C9\u00AD\u00C4\u0097@\u00A1\u00974\t\u00B0\u00C9d\u0092\u00D8\u00B1\u00E9\u00A1\u0098\u0098\u0098r\u00807\x02o\u0089\u00C6b\u00B1\x02\x06\u00A8\u00B1\u00E9/\u0088r7l\u00D8P\u0083\x00\u00D6iG6\u00F1\x1A=yxxL\u0089\u00C4QQQMs\u00E7\u00CEm>z\u00F4hInn\u00EE}\u009C\u008Ez!]+W\u00AE|N\u00C1t\u00DB\u00B6mOy\u00FA\u00C2\u00A9\u00C6>'m\u0086\u009D&\u00D2G\u00E3\u00A9\u00A6\u00DF\u00B6l\u00A51\u0097/_\u00BEOs\u00D6\u00AD[\u00F7\u008C\u00FB\u00CC\u00D5\u00D5\u00F5S\u00AB\x14\x01`l\x069OOO\u0083V\u00AB}Im\u00A4uq}}}\u00D6\x00\x0B\u0081!\u00DEt\u00BD\u0086\u00B7w\u00A1+\u00C4Q\u0080SRR^\u0080\u008A\u00C2-\u00BF\u00F3\u00F2\u00F2\u0088\u0086D\u00F9\u00F9\u00F9tL_\u00C1\u00DEF\u00C6\x7FS\u00CA\u00ED\u00DB\u00B7\u00EF\x12UAg\u00FD\u00D9\u00B3g\x17s\u008E\u00B6\u008A{\u00D4\u00A9\u00C0\u00B6\u00C6={\u00F6\x14`\u00BC\x1E\u00E3=\x11\u00A0}\u00EE\u00DD\u00BB7\x7F:[i\u00CE\u00A6M\u009B\n1\u00C7\u00809M\x01(\u00ED\u00ED\u00ED\x13\u00CE`0\x18\u00FC\u00AC\x02\u008C#4b\x0B`l\u00CA\u00D4\u00DD\u00DD=\u00CC\u00DE\u00A4j\u009A\u00A1\x12\x04;\u00F7\u00D2\u00D2\u00D2\x1E\u00A4nC\u00B6\u00F4\u0082O\u00C7\u00F8}\x17/^\u00FC\x03\u00B6\u00BB\u009F9sF\u00AB\u00D7\u00EB\u0095\u00FC#\u00CF\u00F8\u00F9;\u0081L\u00A5\u0091\u00D5\u00ED\u00BC@*\u00A6|\u00F4\u00C1\u0083\x07\u0093}p\x10\x1D\u0081\u00CB\u00C6\u00EBcccu\u00B6les\flNKpp\u00B0\u0091?f\u00CB\u0096-u\x1B7n\u009Ct\x1A\u00C4\u0089\x0E\x19\x02\u0086\u00D4\u0096r\u00E4\u00C9\u00F2\u00F5\u00EB\u00D7;\u00A3i\f\t\t\u00D1\x01l\x1F\u00A1q\n\u0085bx\u00F7\u00EE\u00DD\u00FA\u00AC\u00AC,\u0091N\u00A7S\u00D9\u00D2\u008B\u00B5\u0085ny\u00E3~~~\u00B2\u00ABW\u00AF\x16\u00E2e\u00BA\u0094\u0097\u0097+q4C+++\x03\u0098\u00D7+\u00F8\x1Ei\u00ABdggwp\x01\u0086.-\u00AA[\u0096\u00E0\u00F7\u00F8\u00F1\u00E3h[:xs\u0082ZZZ\u00FC\u00B9q\x02\u00DE,jnnn;}\u00FAt2\u009CK\u00E3\u00EB\u00EB[\u008E\u00BEn\u00C9\u00D0\u00D0\u0090\u00DC\u0096\u00F2\u00DE\u00DE^\x0F\u00B5Z=q\u00EB\u00CA\u00C9\u00C9)\x07M\b\x06\u00B0\u00F4\u00F4\u00F4Z\u00F0o/\u009D\f\x00l3\u00A0\u0098\u00CDf\u0099\x00\x1D\u00C5tvvF\u00ADZ\u00B5j5xU{\u00E0\u00C0\x01MMM\u008D7w\u00CC\u008E\x1D;\u00CC\u008E\x00\f\u00CF\u00EA\u00B6\x04J*\x00\u00C0\x03\u00D5>\u0096\u0086\u00ED\u00B3\x16$\u00B9\u00857\u00E7\x1B~\u009C\u00A0\u00FA\u00C4\u0089\x13i\u0083\u0083\u0083a\x14\x10;::\u00E2\u00E1,\x0B% h{(B\u008A\x05\u0092\u00A9\u008D \u00F2\u00EC\u00E4\u00C9\u0093Eaaa=8\u00E2f\u00CAB\x10H\u0086\u00B6n\u00DDZy\u00EE\u00DC\u00B9\u00FB\u00F4\u009D\x01\u00B4\u00B3\x18G\u00CA\u00D7\u0096^\u008C\u00E3\x7F\u00E9Q\u00F4\u00F7\u00F7'q^@\x00\x19\u008C\x00\u00E5b\u00E9#\u00A0\u008E\x1F?\u00DE\u00EE\u00E0\u00B7\x0F32\u009BG\u00BC`f9\t\u008E\\v^;=\u00E4\u00BD\u00E0s\u00CA\u0085E\u00C0d\u00CAm622R\r\u008A\u0092\u0098\u00EC\u00D1\u008C\u008D\u00D3g\u00CCD\x18;\u0084#W\u00DC\u00D0\u00D0p\u00EB\u00DA\u00B5k\u00BF\u009E:u\u00AA\x187\u00B9<\u0080\u009B\u008F\r\u00D0\u00C65\x00&\u00DD\u00CE\x0B\u00CC(/\u00E8\u0099\x0E\x1F>\\\x06\x1Eo\x13\u008A\u00E2\u00F1\u00F1\u00F1/\u00AE_\u00BF\u00FE\x0Bl0:\u009A\u00FE\u00ED\u00DC\u00B9\u00B3\f\u00BC^\u00C4\u00F5d\x0B@\u00FC\u00AC@\u00A8\u0090M8]\u0083\u00DC>\u00B2\x07\u00C17?55u\u00C2\u0083\u00F7\u00EF\u00DF\u00FF\u0084\u00F4Y\u009E\u0081V\u00AA\u00C5\u00E0\u008Ao\u00BB\u00BA\u00BA\u00D4vz\u00C2\x18@\u00A0\u00DBQ1a\u008E\u00B6\u0092]V\x06\u00F0\u008C\u00D2=-^X\x06<\u00DE\u00CD\x1E}qqq7q!)\u00E2~M\u00A3\u00A8N\u00FB\u00A6\x18q\u00E5\u00CA\x15O\x1C5'\x7F\x7F\x7F\x13\"8\x05\"\x02\u00A7\u0091<\x12\u00E3\"\u0089Q\u0084\u00AE\u00E3x\u0096\u00C8YF\u008FgU\u00AC\u009F\u00FE\u00A1\tC.\x1DH\u00DC\u00BEd\u00C9\u0092A\u0080C\u00E9$}\u0086\r\u00E5\u00CC\u00A9bAp\u00F2\x06\u009A\u009C\u009C\\ZXX\u00D8\x00\u009B\u00FC\u00C9\u00A6\u008C\u008C\u008C^\u00A4\u00A2\u00CD\x16{\u0098~9\u00BB\x1B\u00D0:\x1Dt\u00FB\u0094\u00E1\u0098\u008F\u00DA\u00EB\x05P@ \u00AE\u0080\u00C2h\u00B4\u00ABQ\u00D3\u00A6)\x13pE{\x1E\u00FA\u0088\x7F\u00EC\u00F6*x\u00A5Y\u00E0%\u00D2\u00C6\u00F4\x1C@\u00E8\x05\u009A-\x11\u009C3\u00AEj\x1AG(\u00B2\u00D2O:\u00AA\u00A0\u00F79\u0080%0\u008C\u009C\u00D3\u00D0b#\x0E\u008D`l)\u00C7&\u0083\x05X.UC*\u00A6\u00A4i \u00E8\u0096\u00D6\u00D6V\x7F\x07?7\u00CE!\u00BAx\u0093\x7F&\u00E8\u00F2\u0082\u00DC\u00B2\u00C3\u00C6\u00891\u00BC\u00A3\u00EF\u00D1F\x06\u00C6L\u00E6:d\u0093\u00E4\u00D0\u00A1C\u008F\u0096-[\u00D6\u0084\u00A3\u00FD\u00DE\u00FEZ\u00A0\u00A0\u00B8k\u00D7\u00AE\u00B2\u0083\x07\x0F\u00B6\u008Bfy\u00A1Oa\u00D2\u00BA\u00BA\u00BA\u00F9\u00B8=E\x1E9r$\u00F6]/\b.\u00FD3--\u00ADm\u00F3\u00E6\u00CDe\u00F0\u0086W\u00FF\u00F2\u00BF\u008C\u00B8\u00A7\u00B4\u00C9\x16\u008DX\x03x\u00E2\u0083\x14}0c\x04Mi\u0099\u00B8\u00A4\u00B5\x7F\u0081\u00C1<\u00EE\x15\u00A0\u0092\u00BD\u00F8D\u00ADl{\u008B\x1E\u00DE@\u0094F\x1Cf\tl3\u00A1\u0098\x0F\u00A5\u00FC#\u00C0\x005\u00BAZ\x01\u00DE\u00FEZ\u009B\x00\x00\x00\x00IEND\u00AEB`\u0082" },
    /*private ImageObject*/ iconCameraOver = { source: "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00X\x00\x00\x00\x18\b\x06\x00\x00\x00~\u00CD:X\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x03fiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.0-c060 61.134777, 2010/02/12-17:32:00        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmpMM:OriginalDocumentID=\"xmp.did:0180117407206811A4AAD700DBD3D4D9\" xmpMM:DocumentID=\"xmp.did:3EEFCBE6F49111E280AC990569DDB197\" xmpMM:InstanceID=\"xmp.iid:3EEBF05CF49111E280AC990569DDB197\" xmp:CreatorTool=\"Adobe Photoshop CS5 Macintosh\"> <xmpMM:DerivedFrom stRef:instanceID=\"xmp.iid:0780117407206811A4AAD700DBD3D4D9\" stRef:documentID=\"xmp.did:0180117407206811A4AAD700DBD3D4D9\"/> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>@\u00851\x16\x00\x00\x0B\u00DFIDATx\u00DA\u00E4Y\tXT\u00D7\x15>3\u00F3\u00DEl0\f\u00C8**jT\x04\x15\t$.\u00D1\u00B8\u00F6K\u00A2\u00D1\u00B8\u00A6\u00AEi5I\u00A3V\u00D3\x04\u00CD\u00D7f\u00AB\u00B1\u00D5\u00F8\u00D5\u00D8\u00C4\u00D0T%mHL\u0093hL\u008C\u0091ZP\u008C[T\\PD\r\u009B\u0082,\x0E \u00CC\x00\u00B3\u00BE73o\u00E6\u00CD{\u00BDw\u00BC3\f`\u0080,\u00F6\u00F3\u00B3\u00F7\u00FB.o\u00DE\u00B9\u00E7\u009Ew\u00EE\u00B9\u00E7\u00FE\u00E7\u00DC\u0083$-\u00AF\t\x02[\u00FA\u00C3\u0091\u00B2\x15\x07\u00CA_\u00B3P\u00C1/9y1HK\u0089\u00D5\x14k\\\u009D9{\u00F8A\u00C4+\u00C0\u00CF\u00DC\u00D0\u00F7\u00BCOQ\x14\u00E1^lR\u00B44\u00F0u\u00B4X\u00E9\u00D3_^XP\u00E2T\u00AD\u00FF\u00BA\u008A\u00D5\u00FE\u00BB\u0086\u00A5\u00F6\u00EB\u00B8AFyh\u00E6\u00AC\u00B7?\u00EF\u008F\u00C6%\u0081\u00FC?O\u00BF\u00B7\u009B\x14\u00FF\u00A9\u00CA\u00CB\u008D\u00C6\u00ABM\u00CB3x\u00F4T\u00E8\u00FAS\rv\u00E0<\x02\b\u00C8\u00AB\u008C\x1C\x0F\u00DF\u00D4s1\u0091\x0FL\u00BA\u008E\u00C6\u0085\u009F\u00C3\u00AAls\u00E3\u00CC\u00F4\u0087\u00A3\u00A4\u00F0\x7F\u00D0$\u00F33r\x12z$\u00A6\u0096e\x14\u009B\u00BD\u0084p\u00A5\fZ\u009C\u009E;\u00FA\u00D1\u00D9\u00FD\u0083\u00DD\u00D1`\x7F\u00EB\u00E8\u00DB\u00BF\u00DFPq|\u00BF\u00EB\u00A7\u00C8j\x0Fq\u00FF\u00EB\u00E6\u00838\u00D4d+\x0FU\u00BD.\x0F\u00D2\u00FC\u00D9G`\u009A\x1A\u009E\u00A0$\u00E1\u00B1k2\u008AL\u00FE\t-\x0E\u00FE\u008E+\u00B5\u00BF\u00DAF\u008F\u008AV\u00FC!u\u00DE\u00F2\\d\u00E03?\r+\u00EE\x1A\u0098Q\u00E4W\u00D4\u0086\\\u0094\u00F4\u00F4\x13\u00C61\u00E5Z\u00EA\u00AA\rF\u0080\u00F8#b\x17\u00C7Z\u00C0\u00C9b\u00B7\x17\u0080\u0092\u00AB (4\u00E6{y_\x18\u00F6\x14\u009E\u0081\u0095\u0080\u00F7\u008A?\u00F3 \u009B\u009C\u00D7;\u00E5!\u00BC'\t\u00D1\u00CE\u00A3\u00EE\u00FE\u00F1\u00F6\u00BDk\f,\u00F38\x18%\u00A8Zm\u00E9\u00B6\u009AT\u0094\u009E\u00E5h\x10e\u00DD\x17\u00E3\u00B05A\u00C9\u00C9\x1C\u00AA\u00F8X\u0081\u00A7\u00ECL\u00AD\u00E8r\u00F2T\\b\x0F~\u00C8\u0084\u00A1\u00902e\x1AD\u00F5M\u00BA\u00CD\u00ACR\u00D4\u00F1Y\u008E\u00F4m&\u008FP\u00C8\u00C2\u00B2\u00C1X\u00B1{\u00C4\u00C0\u00B7ti\u00E3\u00AC\"P\u0082 P\u00D8\t\u00BB\u00D5\u00CC\u008D\u00E5\u00F4\u009E7\u00DFr\u0097\u00E4\x15! 1\"\u008A\x1DK\u00E1k\u008A\u00E5PS|\x05\x0El;\x06+\u00B6\u00AF\u0080\u00841s\u00DA\u00E0\u00E4\u0089\u00FAB?f]j\u00C5L\x0F\u00CFKp\x1Ch\x1F\x17\u009E\u00F9\"?^\x1D\x16\u00F9\u008A\u0094\u00A2R\u00A4\x14\u009D\u00EC\u00DD\x10\x17wR\u00F4\u00F0GLu\u00D5\u00EF\u00EFz\u00F6\x11\u00D3\u00AAo*7KeT\u00AA\u00C7\u00CD\u0081\u00C7\u00C5\x1D\u00E3\x18\u00EB%u\u008F\u00C8\u0097d\u00B4|\u0082(\b\x16D\u00DBg75m\u00FAh\u00FE\u00A8\u00F2\u00B4\u0093\r\u00DE]0T\x14G\u0086\u00C6\u00F6\u00FD-\u00ADR?#\u0091\u00CA\u00FAb>\u009Es\u00ECp9\u00D8KJM\u00E83(U\u0094\u00A0&:\u00CC\u00C6W3\u00E7\u00A6\x14\u00BEpL\u0097\u008B\u00EC#\u00C54\x14\u0098\u00B7\u00A8\u00C2\"\u00E6Pr\u00E5,\u0089T\u00AA\x15x\u00F7\x15\u009Es~\u00BD\u00E8\u00C3\u00C3\x19H\x1F\u00B2(\u00A1\u00A3\u0081\u0091\u00D1\u00A5\u00DD\u0082\b\u0087\u00CD\u00A0\u00FCr\u00FD:g\u00E9\u0099\u0082\u00A8A\u00C3,37}2G\u00A1\u00D1\u00CEE\x1FW\u00A2\u00C5\u009F\u00BB\u0091\x7F<\u00F3\u00C0\u00FA\u0095%\u00F0\u00FE\u00CAw`\u00CD\u00AE0\u00E8\u009D0\u00C9o\u00D4\u008B\u00FA\u00DBGX\x10\u00DB\x1BX\u00B2\u00E4\u00B3\u00BC\u00B1BXL\u00F6\t\x03\u00A7\u00D5\u00DB\u009D` 1!NC\u008F\u008F\u00D3\u00C8\u00C7\x0F\n\u00EF\x19\u0085^\u00DF8Sg\x1D\u00DD\x02\u00CA\u0087\u00F0X\x1F\u00B5,5:8Bs\u00F8\u0086\x1Dt6\x0B(d\x12m|\u00A8bijx\u00D4\u00E4\u00E9\x1B2G\u00A7\u008F\u00EF\u00D98\u00F3\u00ADO\u00A3cR\u00C6\x1D\u00FA\u00CE\u00E2\x19^Tc\x01\u008B\u00CB\u00E3\u00E5K\nW\u00A6E\u00ABC\u00A0\u00E8\u0086\u00DD\u00AFD\u0082\u00B9\u00A6/zTf\u00D5\u00B0\x13}\u00B4\x07\u00C2\u00C3S/\x18<\u009Ar\u00B3\x11eX\"D\u00A9\u00A8\u00E4\u00F80E\u00F2\u00D0>\u0083\u00E6\u00A2\u00E1\u0091\u00FEp\x10hK\x11{0\u00EFr\u0083T\u00DE\u00A5}\u0083*\u00CF\u00EDf\u0091q\u00FB\u008E\u0098`\u009C\u00BA.\u00E3\u00BDj\u008EZ\\\u00AE\u00B3\x03/\u0088\x10\x1BL\u008F\x1B6\u00FA\u00919\u00F3\u00B7e\u00CD\u00FBb\u00D5\u00AC\u00AA\u00D0s\u009F\u00BFo\u009E\u00F1\u00CA\u0083@+4\u009D\u009F\u00A8\x0E\u00E7[\u00CEP\u00EAU\u00D9WMZ\u00BC\bo\u00B3\u00B5\u00E8\u00C0\u00E5\u00B4\u00EB\u0084^\t\u00BA\u009B\u00FA\u00CA\u00E2\u00AC7?\u00C5\u00EA4Y\x18y\x1D\u0099\u00A4g$\x1A\u00AE\u0081m\r\x0Fh\u008DEM<\u00E8\u00AC\u00B2\u00B8\x19\u0083\u0092~\u0087H\x1Bz\u00C4'\u00BF\u00B3\u00AF\u00DA6\u00DC`\u00E7\u00DB\u00F0\x1542\x1D\u00F4\u00EAmnQ\u00E1o\u00E8,N?M\u00CFp\x1A\u00BFN\u00F84\u00B0\x1E\u00D49(7R\u00C3\u009F\u00DB[\u00B8\u00F6\u0083\u00B9\u00A9o\u0083\u0088pO\u00F0\u00B41\u00B0\u0094\u0092Ii\u00AF\u00D5;\u00EBN\u00C6\u00A8\u00AD<\u009B\u008B\u00A64OJ\u00DB\u00B8(\u00AF\u00D9\u00B3\u00F8P\u00B5\x19\u00AA\u00CD\x0E\u00A8\u00B5:!\u00FF\u00A6\r\u00F6U\u00D9\x06\u00C8z\x0E\u00D8\u00A2\u00ED\x19\u00E70\u009F\u00F9O\u00A1\u00D2\u00D6x\u00B9+\u00B9\x12\u0092\u0087\x07F\u00E2\x12\u00BD5\u008A\u00C3\x00MxB\rW\u00CFF1\u00F5\x17\u00E1p\u00E6\x06e\u00CE\u0096u\u00E6\u0082#\r\x18]DQ\u0090\u00F8x\u00BC\u00FC\x15\x17\x0E\u00C2\u00EA\u0094\u00C5P\u0090\u00FD/\x1F\u00DD\u00E2tC\u00B9\u0095\x1F\u0081\u00B3\u00CF\x02\x1B\u00B5\u00C8\u00C0\u00BAn\u00C9u;\u00ED\u0090\u009B\u00B1\x19\u00F1/\u00F4>\u00F1{\u0080^\u0082\u00DB%\u00F3\u00C6\u0086\x00\x1A\u00E7t\u00D8a\u00CF\u00C67\u00D0\u009CEP|\u00FC+\x1F\x1D\u00CB,f$\x18\x12U^\x17\x0E\\#z\u0097z\x04A\u00EE\u00B5|'=X\u00B07XJ\u00CEU`\u0090\u00A9\u00E5\u00E5\u008B\u008B\u009B\u0098\x0E<F\x07\x07\u00A7\r\u00CE\u0094\u00B1\u00CF\u00BD<\x18\u00F1Y\u00A3\u0081-\u00EFJ.\u00B2p{\u00FC\u0095Z\u00CA\x0B\u00BF\u00F5z\x01\u00E9\u00C3\u00C6N\u009E\x1F?j\u00DC\u00E29\u00CB\u00D3\u00D6\u00CE{m\u00F3\u00A6\x05\u00DB\u00B3\x06b\x03\u00FB\u00BD\u00C5\u00D7\u00B7/\u00DB\u008C\u00E8\u0097`\u00E7\u00DA\u00CC@z\u0093\u009D\x0F\u009B\u00B6n\u00FB\u00E3E\x06\u00C6O\u00A3\u00EBJ\u008E\u00C0\u00A1\x7F\u00EEA\u00FC\x05\u00F8\u00E9}\x0F\u0094\u00E5;X\x014\u00BA\u00AE\u00F40\u009C\u00F9\u00EA\u0080w\u00CE\u0087k\u00DE\x03ks\u008Do\u00AC\u0092\u0085DDW\u0083 @{9\x14\u00EFr\u00DA@Fw\n\x0F\x1AJ\u00C25\u00D9,\u00F8\f\u00D2\u00D7\u009A\x19-\b\u008A\u00DB\u00F2\u00E9\u00ADN\u00AA\u00BF\u008B\u008F@?\u00AF\u0087\u00D0R\u00BB\u00F7\u0083\u009D4\x14(\u00DA'\u00DD\\\u00C3\u00B65{\u00E1\u00C9W\u00B5\u0090<y\t(\u0083#\u00F2\u00EA,\u00FEA\u00ADB\u00D6\u00FB\u00F1~\tY\u00E8g\u00D2-/is!\u00C2\u0088Q\u00EBM\x07\x03\u00E8\u009C\u008B\u00935\u00B4\u0098T\x10\u00DCJ\x1B\x10*\u00D7_\x05\u00B8\u0081~\u00E2\x0B@\u0098\u00F7=P\u0096\x0FG\x03h\x03\u00C2\u00FCs\u00B0B\\\u0084\\\u00B04\u0093q\f\x17\u00D89\u009A\u00CF\u00E5f\u0083Gi@'B\x05\n5Sg\u00BA^(U\u00CA)eWG\u0099\u0092+\u00B4C\x1F\u009B\x1B\u0084\u00858\u008D\u0086\u00F2\u00EF\u00E3\x13]\u009C\u00B5,g\u00A7\x0E\x7F\rE\u00E5\u0088\u00AE\u00E4\u00A2\u00F0\u00DC\x1E\"\\S^{7h\u00F2\u00E4\u00C9\x03\u00E8\u00BD\u009B^\u0087\u008F_~\x01\x0E}\u00B0\x19\x1A\u00AA.\u00E2\u00CD\u00B28\u00DC\u00F0u\u00B9)d\u00DA\x1B[\u00A7\u0080\u00C7#\u00B9\u00E51\u00A4# K;Z\u0085smW\x1B:\u00EA7\u008E\u00EC\u00AD\b|\u00EF\u00D1\x7F\u00C8\u00B41O\u00AF\u00C1)\u00A2g\u00F4\u0092\x175\u00E1\x03\u0087/h'\u008Bx@\u00C0\u009C~\u0089\u00D3\u00D1\x1C\x1CS<\u00B36\u00EDHDYN\u00B2\x7F\u009C1U\u00E2T3\u0088gt\u00D3\x17\u00FCj\u00DA\u00ECe\u00ABW=:u\u00DA\u00C0\u00BA\u00BC\x03:\u008A\x07YhWY\u0084S&\u008F\u00EB=r\u00D2\u0090+\u00FB?;\x05\u00F9Y\u00BB`\u00FC\u00D3\u0093\u0080V\u0086t\u00C8\u00B4\u00AB\x0B\u00F7\u00E8\u008B\u00CE\u00B7\u00DC7\u00E6\x17J\u0097Js?\u00B8:\u0097\u008B\u00D2\u00B0\u00F6\u00D1U\x1A\x12\u009F2\u00BB\u008C\u00D7\u00CCzj\u00E3\u00F6Yn;s\u00CD\u00C48\u00D8k\u00ACt\u00F0u\x1BO\x02\u0093\x07J\u00CF\u009D4\u00C2\u00C4\u00FE\b`<\u00B7\u00CF\u0089\x03\x03\r\bb\u00CB\u00D5B\x03J1\u00BF\u0083\u0090\u00C8\u00E1\u0098Rbr\u00C5.\u00FC\u00E5\u00B2\u00CB\u00A9O>{\u0085\u0097\u00C8\u0092w\x147k\u00DA\x18\u00D6g\u008F\x009\u0081s\u008C\u00BCl\u009C\u00AE\u00D4\u00E0\x1F\x0B3\u00DD8\u0081\u008E\x02?f\u00E9K\u00AF\x1Fm\x12F\u00EA\x1BL\u0090\x14\x19\u00B9t\u00C9\u00C7GNSv\u00BB\u00DD\x022uDg\u00860\u00DAE\u009A\u00EE\x13\u00BF\x02\u00FD\u00FC\u00B6\u00F9\u00C8\u00EE\x0B\u00B4\x1B\u00D6\u00BAG\u00CE^\t\u009A\x1E\u00FD\x00{\u00A1\u009B\u00B3\u00C1\u00F5\u0082}\u008E/6|\u0084s\u00E3\u00D1K\u00D7<u\u008C\u0095%\u00A0h\u00D1\u00A9\u0081\u00DD\u009C\u00AB\rD\u008C[\u00FEjl\u00BD\x18\u00FC|\u0091\u00C1\x06\u00B8G\u00A9\u00E9\u00C1JJ\x06z\u00D6\u00DD\u00BAhk\u00F3w\u00D5\u00DF|\u00A9\u00EB5\u00F1\u00D7b\x07\u00C7\u00F0\x198\u0090.\u00F1&O\u008C\u00F6r\u00CEv\u00CBC\x0B\u00B7\x00E\u00AB-N\x17\u00EC(2\u0084D\x07\u00D1\u00E3\u00B0l\\\u00D8\u00EAJN\u00E0\x1C\u009D\u0095k\u00E5eL5\u00E2\u0091\x1D;\u00B1g\u009F\u00ADjP\u00E9\u0084[~W\u00D0`\x05\u0095\u00CC\x18K\u00A9\u00A4\"\u00C7v\u00E1\u00C18;)\u00B3+\u00A6\u00FEf\u00D7\u00C9\u00B4\u00CCE\u00E3\u00D3\u00DD'v\x1F\u0084\x13\u00BB\u008B\u00A4\x0FL\x19\x0Ejm\x10\u0094\u009E\u00BA*\u00B4\u00DC\u00ACBlu\u00F3\u00DE\u00DD\u009DdTG\u00FFIo\u00B0H\u00BA\u00AC4\u0089mV&9\u00F5\u008F\u00BF\u00B0\u0094\u009E\u00FB\x13\u00F4MZ\b\u0091q\x0F\x1A\u0098\x00O\u00E4\u00DDv0T\u009FW\u00E4f\u00FC\x15-\u00CFz\u00CB\u00E3\u00DA{pG\u00CF\x03\u0089\u0097\u00C6Z\x0E~tL\u00C60\x7F\u00F4\u008C\u009C\u00F9\x1C\u0084\u00C5$\u00E2\u0093\u00A03\u00A3\u008Dc\u008C:\u00D0\u0095^\u0084!\x0F\u00CF\x0E\u00F0\u00FA\u008Er\u00F4\u00D5\u0085\u009C6*N\u00E7\x0Eju\u00C6\u00FAk'\u00E8\u009C\u00BF\u00A7\u009Bue\u00D7\u00F0\u00E1j:\u00F4\u00C9\u00A70za\n\x04\u0085\u00F6\u0083\u00C6\u00CA\u00A3\u00A7\u00B6.\u00DB#\u0089\u00D9\u0098]\u00DA((\x12\u00BBs\u0091\u009B\x10\x17\u00CA'\u00AA\u0085m\u00B5\u0097\u00CFm\u00CD\u00D9\u00F8\u00A2\x15\u00E7\u008A\u00E4\u00AAkO~b\u0091\u00F0\u00E0\u00FCeS\u009D\u00AA\u00B0MY\x15-Q\u00AC\u00BB\u00EB\u008A\u00DC(g\u00D5\u00CB\u00F9\x1B\u0097o%7B \u00F2bQ\u00EF\u0085O\x1E\u008C\u009A\u0091\bAa\u00C1\u00C0\u009Al\u0090\u00BF\u00BF\u0084\\\u00B7k\u00BD8\u008B\u00EE\x1E\u0084\u008F&\u00F4\u00D2\u00B4C\u00D7\u009A\u00D2\x1F\x1B\u008C\u00CB[C\u00BC\u00D7\u00F2[W\u00F0z|i \u00BFq%\u00A6\x0F\f\x19\u009B\b1\x03{A\u00C3\u00F5\u009BPv\u00FA:\u0091\u00A7\u00C6\u00A1\u0083\x04\u00B1\no)w\u00C3\u00E1J\u009F\u00AE\u00BD\u00F4E\u00BB\u00EA\u00B7\u00AE\u00D9Ct\u00D2 \u00A7*\u0083\u00C6\u00AA*4\u0084c\u008E\x0F/p\u00D9\u00F7>\u00D4\u0083\t\u00AD\u009A\x12yt\u00D7\u0094\u00D0\u00DD\u00BA)\u009F\u00D2\u0099(G\u00CF\u0090\x17\u0093FL\u009C\u00B32\u00EB\u00E2\x01t\x1D\u00ADAw\x05\u00B7\u008C\u00A2\u00A3D\u008A\u009E\u00A0c\u0085Q'\u00CA\u009B\u00A0;\u00C6\u00F5\u009E\f\u0097\u0083kW\x0Es\x10\x03\u00B6x\u008D\u009D\u00BF\u00BF\x18=)\u00EC\u00BFd\x13\x18\u00F2\u0094\x10\u0083\u00DD$5m,\u00C7JDYI\u00EDCA\\\u00D1A\u00E6\u00F1D\u00B6\x19JO\u00D7\u00A0N\x13\x19,\x19\u00A3\u00C9\u00B7\u00DC\u0084?<\x10\"\"\u00B4!\f\u00DA\u00A9b\u00A2\x13v*'\u00F9\x16C\u00E6`\u009D\u00F4D\x1EM\u00BE\u00CBR\u00A2\u00E1\u00C6i\u0088J\u00B8\u00BF;\x06\u00C1\x05\u00F8\u00F3\u00F5f\u00B8\u00DA\u00CC\u00F4\x19\x10\u00A6^\u00AEUR(\x13@+f\x04\u00A8\u00B5X\u00A0\u00DE\u00E6\u00EC~a\u00C4\u00E5h1\u0095\x15\u0096@\u00DBB\u0088@\x14w\u0092\x14\u008A\"\x06\x14\u0088\x11\x027\x03{\u009D)-\u00B7\u00AC\rv\u00A2w\u008Ex\u00F4m\u00E3u\u00FA\u0094D\u008E\u00C8\u00F6\u00C9\u00F5\u00A09\x1D*F\u0088/,\u00D0\u00C0\x12\u009Av\x13\u00AFt\x10c\u00E2y\x1E\u00C4\x17X7\u00E5H\u00F77\u00CA\u009E\u00BD}'Ly>\x01b\x06L\u0082\u008Ei\u00D3m\u009B\x15\x01\u00FE\u00A5\u0086\u009FP'\u00E7\u00ECFE\u00F1\u00F1\u00BFUf\x7Fr\u00AD#\u0090\u00B6)\u00F4v\u00A3\u00CA\u00F6\u00C3\u00AAii\u00B9\u00A5\"\u00D9\u00AC\u00AEe\u0088\x1D2\x0B\x11\u00CDw\u00FF\u0090o\u00E3\u009D\u0088V\u00F6\u00EC?\u0094\u00BB\u00FF\u00D1\u00E9\u00E2\u00A8\x19\u00AB\u00EFxI\u00AF\u00F4\u00F4\u00E7\u00F2\u00BA\u00D2\u00B3\u00AE3YG\t~\u00B1w\u00E9?\u00E7\x02\u00B1\x1C\u00EBXM\u00F4\u00B5\u00FF\u00A0\x7F\x19\x11\u00BC\b%\x01#\u0096\u0080\u00FD\u009Dj\u00F8\u00E87\x13\u00ACj&\u008A\x0Bpw6\u008C\u00E1!\u00E4\u00E9\u008B\x01l''\u00EE{\r\f\x04\u00B4U$\u008A\u00D3wPi\u009F\u00A2Nr\u00FC\u00EF\u00F9\x7F+\u00FFW\u0080\x01\x00Q\u00B7\u00CB\u0091}\x02q\u00A7\x00\x00\x00\x00IEND\u00AEB`\u0082" };
    
    /*public String*/ this.about = 'Snap! is quick tool for making composition snapshots.';
    
    
    //[ Constructor ]################################//
    
    /*public void*/ this._constructor = function(){
        
        setUIColors();
        
        var folderTemp = new Folder( Folder.userData.fsName+'/aes/snap/' );
        if( !folderTemp.exists )
            folderTemp.create();
        
        // Careful UI code ahead!
        var resourcesUI = "group { minimumSize:[196,30], alignment:'fill', orientation:'row', alignChildren:['left','center'], margins:0, spacing:10, \
            takeSnap: Custom { preferredSize:[88,24] }\
            setFolder: StaticText { alignment:['right','center'], text:'../', helpTip:'Change destination folder' }\
        }";
        
        toolbar.margins = 4;
        toolbar.spacing = 0;
        toolbar.r = toolbar.add( resourcesUI );
        
        
        var takeSnap = toolbar.r.takeSnap;
        takeSnap.removeEventListener( 'click', frameAsPng );
        takeSnap.addEventListener( 'click', frameAsPng );
        
        takeSnap.onDraw = customDrawImage;
        takeSnap.image0 = getImageFromSource( iconCameraStatic, new File( folderTemp.fsName+'/snap_static.png' ) );
        takeSnap.image1 = getImageFromSource( iconCameraOver, new File( folderTemp.fsName+'/snap_over.png' ) );
        takeSnap.notify( 'onDraw' );
        
        takeSnap.removeEventListener( 'mouseover', notifySnapOnDraw );
        takeSnap.removeEventListener( 'mouseout', notifySnapOnDraw );
        takeSnap.addEventListener( 'mouseover', notifySnapOnDraw );
        takeSnap.addEventListener( 'mouseout', notifySnapOnDraw );
        
        var setFolder = toolbar.r.setFolder;
        setFolder.graphics.foregroundColor = globalG.newPen( globalG.PenType.SOLID_COLOR, globalG.foregroundColor.color, 1 );
        setFolder.removeEventListener( 'click', changeFolder );
        setFolder.addEventListener( 'click', changeFolder );
        
        
        if( toolbar instanceof Window ){
            
            toolbar.center();
            toolbar.show();
            
        }else{
            
            toolbar.layout.layout(true);
            
        }

    }
    
    
    var
    
    //[ Methods ]################################//
        
    /*private Boolean*/ frameAsPng = function(){
        
        try {
            
            if( !folderExport || (folderExport && !folderExport.exists) ){
                if( !changeFolder() ){
                    alert( "Can't use the folder you've selected. Please, try again." );
                    return false;
                }
            }
            
            /*CompItem*/ var compItem = getActiveComp();
            if( compItem ){
                
                /*String*/ var filePngName = compItem.name || 'Snapshot';
                /*int*/ var compItemFrame = Math.floor( compItem.time/compItem.frameDuration );
            
                /*File*/ var filePng = null;
                /*int*/ var i = 1;
                while( (filePng=new File(
                    folderExport.fsName+'/'+filePngName+' [f'+Array(5-String(compItemFrame).length).join(0)+compItemFrame+']('+(i++)+').png'
                )).exists ) continue;
                
                try {
                    
                    compItem.saveFrameToPng( compItem.time, filePng );
                    return true;
                    
                }catch( $e ){
                    
                    alert( "O_x  Wops.. can't recover from this crash. Script uses saveFrameToPng and it seems that it's not working.." );
                    return false;
                    
                }
            
            }
            
            return false;
        
        // Pokemon exception handling
        }catch( $e ){
            alert( $e );
            return false;
        }
        
    },
    
    /*private Boolean*/ changeFolder = function(){
        
        try {
        
            /*Folder*/ var folderExportTemp = null;
            
            if( !folderExport ){
                if( !(folderExportTemp=Folder.selectDialog('Where to mate?')) ) return false;
            }else{
                if( folderExport instanceof Folder && !(folderExportTemp=folderExport.selectDlg('Change snapshot folder to..')) ) return false;
            }
            
            if( folderExportTemp instanceof File ){
                if( confirm( 'Amm you\'ve selected a File.. Go again for folder this time?' ) ) return changeFolder();
                return false;
            }
            
            // For the sake of humanity
            if( !(folderExportTemp instanceof Folder) ) return false;
            
            folderExport = folderExportTemp;
            return true;
        
        // Pokemon exception handling
        }catch( $e ){
            alert( $e );
            return false;
        }
        
    },

    /*privete void*/ setUIColors = function(){
        try {
            
            if( aeVersion>=10 && aeVersion<11 ){
                if( app.preferences.havePref( 'Main Pref Section', 'User Interface Brightness [0.0..1.0]' ) ){
                    aeUiBrightness = parseFloat( app.preferences.getPrefAsFloat( 'Main Pref Section', 'User Interface Brightness [0.0..1.0]' ) );
                }
            }else if( aeVersion>=11 && aeVersion<12 ){
                if( app.preferences.havePref( 'Main Pref Section', 'User Interface Brightness (2) [0.0..1.0]' ) ){
                    aeUiBrightness = parseFloat( app.preferences.getPrefAsFloat( 'Main Pref Section', 'User Interface Brightness (2) [0.0..1.0]' ) );
                }
            }else if( aeVersion>=12 ){
                if( app.preferences.havePref( 'Main Pref Section 2', 'User Interface Brightness (2) [0.0..1.0]' ) ){
                    aeUiBrightness = parseFloat( app.preferences.getPrefAsFloat( 'Main Pref Section 2', 'User Interface Brightness (2) [0.0..1.0]' ) );
                }
            }
            
            if( aeUiBrightness>.5 ){
                if( aeVersion<11 ){
                    //if( toolbar instanceof Window ){
                        if( globalG.backgroundColor.color[0]>.5 ){
                            globalG.backgroundColor = globalG.newBrush( globalG.BrushType.SOLID_COLOR, [.6,.6,.6,1] );
                        }
                    //}
                }
                globalG.foregroundColor = globalG.newPen( globalG.PenType.SOLID_COLOR, [0,0,0,1], 1 );
                
            }else{
                if( aeVersion<11 ){
                    //if( toolbar instanceof Window ){
                        if( globalG.backgroundColor.color[0]>.5 ){
                            globalG.backgroundColor = globalG.newBrush( globalG.BrushType.SOLID_COLOR, [.3,.3,.3,1] );
                        }
                    //}
                }
                globalG.foregroundColor = globalG.newPen( globalG.PenType.SOLID_COLOR, [.8,.8,.8,1], 1 );
                
            }

            
        }catch( $e ){
            alert( $e );
        }
        
    },
    
    /*private ScriptUIImage*/ getImageFromSource = function( /*ImageObject*/ $image, /*File*/ $fileTemp ){
            
        try {
            
            return ScriptUI.newImage( $image.source );
            return true;
            
        }catch( $e ){
            
            try {
                if( $fileTemp.exists ){
                    return ScriptUI.newImage( $fileTemp );
                }
            }catch( $e ){}
            
            $fileTemp.encoding = 'BINARY';
            if( $fileTemp.open('w') ){
                if( $fileTemp.write( $image.source ) ){
                    $fileTemp.close();
                    return ScriptUI.newImage( $fileTemp );
                }
                $fileTemp.close();
            }
            return false;
            
        }
    },
    
    /*private void*/ customDrawImage = function( $event ){
        try {
            
            if( $event.leftButtonPressed ) this.graphics.drawImage( this.image0, 0, 0 );
            else if( $event.mouseOver ) this.graphics.drawImage( this.image1, 0, 0 );
            else this.graphics.drawImage( this.image0, 0, 0 );
            
        }catch( $e ){}
    },
    
    /*private CompItem*/ getActiveComp = function(){
    
        if( app.project.activeItem instanceof CompItem )
            return app.project.activeItem;
        return null;
        
    },
    
    /*private void*/ notifySnapOnDraw = function(){
        
        /*CompItem*/ var activeComp = getActiveComp();
        
        this.helpTip = activeComp ? 'Take snapshot of '+activeComp.name : 'No comp selected';
        this.notify( 'onDraw' );
        
    }
    
    if( !this.initSkip ) this._constructor.apply( this, arguments );
    return this;
    
}(this);